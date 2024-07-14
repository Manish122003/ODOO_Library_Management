import React, { useState } from 'react';

const BookDetails = ({ book }) => {
  const { volumeInfo } = book;
  const [borrowPopupOpen, setBorrowPopupOpen] = useState(false);
  const [borrowerName, setBorrowerName] = useState('');
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 15); // Return date 15 days from now

  const handleBorrow = () => {
    setBorrowPopupOpen(true);
  };

  const handleBorrowPopupClose = () => {
    setBorrowPopupOpen(false);
    setBorrowerName(''); // Clear borrower name after closing popup
  };

  const handleBorrowConfirmation = () => {
    // Handle borrowing logic here (e.g., send data to server)
    // For demonstration, just closing popup and clearing borrower name
    handleBorrowPopupClose();
  };

  return (
    <div style={styles.card}>
      {volumeInfo.imageLinks && (
        <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} style={styles.thumbnail} />
      )}
      <div style={styles.details}>
        <h3>{volumeInfo.title}</h3>
        <p>Authors: {volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
        <p>Published Date: {volumeInfo.publishedDate || 'Unknown Date'}</p>
        <button onClick={handleBorrow}>Borrow</button>

        {borrowPopupOpen && (
          <div style={styles.popup}>
            <h3>Borrow Details</h3>
            <p>Book Title: {volumeInfo.title}</p>
            <p>Borrower Name: <input type="text" value={borrowerName} onChange={(e) => setBorrowerName(e.target.value)} /></p>
            <p>Return Date: {returnDate.toLocaleDateString()}</p>
            <p>Late Return Charges: $5 per day</p>
            <button onClick={handleBorrowConfirmation}>Confirm Borrow</button>
            <button onClick={handleBorrowPopupClose}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: 8,
    width: 250,
    margin: 10,
    padding: 10,
    display: 'flex',
  },
  thumbnail: {
    width: 100,
    height: 'auto',
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  popup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
};

export default BookDetails;
