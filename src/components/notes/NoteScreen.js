import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input type="text" placeholder="Title" className="notes__title-input" />
        <textarea
          placeholder="Write here..."
          className="notes__body-content"
        ></textarea>
      </div>
    </div>
  );
};
