import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../../types/types";
import Swal from "sweetalert2";
import { fileUpload } from "../../helpers/fileUpload";

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
    dispatch(addNewNote(doc.id, newNote));
  };
};

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

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: "Uploading..",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(startSaveNote(activeNote));
    Swal.close();
  };
};

export const startDeleting = () => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    const uid = getState().auth.uid;

    const noteRef = doc(db, `${uid}/journal/notes/${activeNote.id}`);
    await deleteDoc(noteRef)
      .then(
        Swal.fire({
          title: "Borrado con exito",
          text: "Su nota fue borrada con exito",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        })
      )
      .catch((err) => Swal.fire("Error!", err.message, "error"));

    dispatch(deleteNote(activeNote.id));
  };
};

export const deleteNote = (id) => ({ type: types.notesDelete, payload: id });
export const updateNote = (id, note) => ({
  type: types.notesUpdate,
  payload: { id, ...note },
});

export const setActiveNote = (id, note) => ({
  type: types.notesActive,
  payload: { id, ...note },
});

export const notesLogout = () => ({ type: types.notesLogoutClean });

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: { id, ...note },
});
