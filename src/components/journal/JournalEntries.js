import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingNotes } from "../../redux/actions/notes";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const entries = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();


  

  return (
    <div className="journal__entries">
      {entries.map((entry) => (
        <JournalEntry key={entry.id} {...entry} />
      ))}
    </div>
  );
};
