import React, { useState, createContext, useContext } from 'react';

// Create a context to manage borrowings
const BorrowContext = createContext();

const BorrowProvider = ({ children }) => {
  const [borrowings, setBorrowings] = useState([]);

  const addBorrowing = (borrowing) => {
    setBorrowings([...borrowings, borrowing]);
    localStorage.setItem('borrowings', JSON.stringify([...borrowings, borrowing]));
  };

  const removeBorrowing = (index) => {
    const updatedBorrowings = [...borrowings];
    updatedBorrowings.splice(index, 1);
    setBorrowings(updatedBorrowings);
    localStorage.setItem('borrowings', JSON.stringify(updatedBorrowings));
  };

  return (
    <BorrowContext.Provider value={{ borrowings, addBorrowing, removeBorrowing }}>
      {children}
    </BorrowContext.Provider>
  );
};

const useBorrowings = () => {
  return useContext(BorrowContext);
};

export { BorrowProvider, useBorrowings };
