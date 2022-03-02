import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../redux/actions/notes";

export const NotesAppBar = () => {

  const dispatch = useDispatch()
  const {active} = useSelector(state => state.notes);
  const handleSave = () =>{
    dispatch(startSaveNote(active))
  }
  return (
    <div className="notes__appbar">
      <span>Fecha</span>
      <div>
          <button className="btn">Image</button>
          <button className="btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};
