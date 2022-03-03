import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDeleting, startSaveNote, startUploading } from "../../redux/actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureUpload = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {

    const file = e.target.files[0];
    if(!file) return ;
    dispatch(startUploading(file))
  };

  const handleDelete = () =>{
    dispatch(startDeleting())
  }
  return (
    <div className="notes__appbar">
      <span>{moment(active.date).format('d/M/YY')}</span>
      <input
        id="fileSelector"
        name="file"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn btn-danger ml-1" onClick={handleDelete}>Delete</button> 
        <button className="btn btn-primary" onClick={handlePictureUpload}>
          Files
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
