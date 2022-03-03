import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingNotes } from "../../redux/actions/notes";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const entries = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const sortedEntries = entries.sort((a, b) => b.date-a.date)

  
  return (
    <div className="journal__entries">
      {sortedEntries.map((entry) => (
        <JournalEntry key={entry.id} {...entry} />
      ))}
    </div>
  );
};
