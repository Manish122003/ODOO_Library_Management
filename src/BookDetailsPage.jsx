import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(response.data);
      } catch (err) {
        setError('Failed to fetch book details. Please try again later.');
        console.error('Error fetching book details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!book) return null;

  const { volumeInfo } = book;
  const title = volumeInfo.title || 'No Title';
  const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author';
  const publishedDate = volumeInfo.publishedDate || 'Unknown Date';
  const thumbnail = volumeInfo.imageLinks?.thumbnail;
  const description = volumeInfo.description || 'No description available';

  return (
    <div>
      <h2>Book Details</h2>
      <div style={styles.card}>
        {thumbnail && (
          <img src={thumbnail} alt={title} style={styles.thumbnail} />
        )}
        <div style={styles.details}>
          <h3>{title}</h3>
          <p>Authors: {authors}</p>
          <p>Published Date: {publishedDate}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: 8,
    width: 400,
    margin: '20px auto',
    padding: 20,
    display: 'flex',
  },
  thumbnail: {
    width: 150,
    height: 'auto',
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
};

export default BookDetailsPage;
