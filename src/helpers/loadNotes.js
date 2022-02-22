import { collection, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const noteSnap = await getDocs(
    query(collection(db, `${uid}`, "journal/notes"))
  );
  const notes = [];

  noteSnap.forEach((note) => {
    notes.push({
      id: note.id,
      ...note.data(),
    });
  });
  return notes;
};
