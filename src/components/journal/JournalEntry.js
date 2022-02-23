import React from "react";
import moment from "moment";
import { notesReducer } from "../../redux/reducer/notesReducer";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../redux/actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();
  const nDate = moment(date);

  const handleEntryClick = (e) => {
    e.preventDefault();
    dispatch(setActiveNote(id, { date, title, body, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{nDate.format("dddd")}</span>
        <h4>{nDate.format("MMMM, Do")}</h4>
      </div>
    </div>
  );
};
