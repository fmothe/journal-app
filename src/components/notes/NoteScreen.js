import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotesAppBar } from "./NotesAppBar";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../redux/actions/notes";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title } = formValues;
  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(setActiveNote(formValues.id,{...formValues}))
  },[formValues])


  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
          name="title"
        />
        <textarea
          placeholder="Write here..."
          className="notes__body-content"
          value={body}
          onChange={handleInputChange}
          name="body"
        ></textarea>
      </div>

    </div>
  );
};
