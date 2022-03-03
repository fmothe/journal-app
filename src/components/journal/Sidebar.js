import React, { useEffect, useReducer } from "react";
import { JournalEntries } from "./JournalEntries";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../redux/actions/auth";
import { createNewNote } from "../../redux/actions/notes";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const {email} = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout())
  };

  const handleAddNewEntry = () => {
    dispatch(createNewNote())
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" /> <span> {email}</span>
        </h3>

        <button className="btn mt-5" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry" onClick={handleAddNewEntry}>
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5 mb-5"> New Entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
