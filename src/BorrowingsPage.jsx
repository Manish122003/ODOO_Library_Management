import React from 'react';
import { useBorrowings } from './BorrowContext';

const BorrowingsPage = () => {
  const { borrowings } = useBorrowings();

  return (
    <div>
      <h2>Saved Borrowings</h2>
      {borrowings.length === 0 ? (
        <p>No borrowings yet.</p>
      ) : (
        <ul>
          {borrowings.map((borrowing, index) => (
            <li key={index}>
              <h3>{borrowing.book.title}</h3>
              <p>Borrower: {borrowing.borrowerName}</p>
              <p>Borrow Date: {borrowing.borrowDate.toLocaleDateString()}</p>
              <p>Return Date: {borrowing.returnDate.toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BorrowingsPage;
