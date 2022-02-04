import React from "react";

export const JournalEntry = (entry) => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.blogs.es/6c558d/luna-400mpx/1366_2000.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Cillum nisi minim nisi veniam.</p>
        <p className="journal__entry-content">
          Et sit nulla do nostrud minim nostrud cupidatat.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Dia</span>
        <h4>numerodia</h4>
      </div>
    </div>
  );
};
