import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../../types/types";
import Swal from 'sweetalert2'

export const createNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await addDoc(
      collection(db, `${uid}`, "journal/notes"),
      newNote
    );

    dispatch(setActiveNote(doc.id, newNote));
  };
};

export const setActiveNote = (id, note) => ({
  type: types.notesActive,
  payload: { id, ...note },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotesList(notes));
  };
};
export const setNotesList = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) {
      delete note.url;
    }
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);

    await updateDoc(noteRef, noteToFirestore)
      .then(Swal.fire("Saved!", note.title, "success"))
      .catch((err) => Swal.fire("Error!", err.message, "error"));
    dispatch(updateNote(note.id, note));
  };
};

export const updateNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    ...note,
  },
});
