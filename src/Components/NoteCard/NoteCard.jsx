import React from "react";
import PropTypes from "prop-types";
import './NoteCard.scss'

export default function NoteCard({
  data = [],
  roundCorner = "10px",
  borderColor = "#999300",
  textColor = "#0A3E66",
}) {
  return (
    <div
      className="note-card mt-4 py-4 px-3"
      style={{
        borderRadius: roundCorner,
        border: `1px solid ${borderColor}`,
        color: textColor,
      }}
    >
      <h6>Catatan</h6>
      <div>
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  data: PropTypes.array,
  roundCorner: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};
