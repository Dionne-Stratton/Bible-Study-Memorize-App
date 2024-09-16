import React, { useState } from "react";
import "../../MemoryGrid.css";

const MemoryGrid = ({ memoryVerse }) => {
  const { reference, verses, verseLetters } = memoryVerse;

  const [modalData, setModalData] = useState({
    isOpen: false,
    verseText: "",
  });

  const openModal = (verseText) => {
    setModalData({
      isOpen: true,
      verseText,
    });
  };

  const closeModal = () => {
    setModalData({
      isOpen: false,
      verseText: "",
    });
  };

  return (
    <div className="memory-grid-container">
      <h1>{reference}</h1>
      <div className="grid">
        {verseLetters.map((letters, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => openModal(verses[index])}
          >
            {letters}
          </div>
        ))}
      </div>

      {modalData.isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalData.verseText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGrid;
