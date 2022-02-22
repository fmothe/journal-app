import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../../types/types";

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
    return async (dispatch) =>{
        const notes = await loadNotes(uid);
        dispatch(setNotesList(notes))

    }
}
export const setNotesList = (notes) => ({ type: types.notesLoad, payload: notes });
