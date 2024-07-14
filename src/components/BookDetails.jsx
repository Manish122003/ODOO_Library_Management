// BookDetails.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const BookDetails = ({ book }) => {
  const { volumeInfo } = book;
  const title = volumeInfo.title || 'No Title';
  const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author';
  const thumbnail = volumeInfo.imageLinks?.thumbnail;

  return (
    <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={styles.card}>
        {thumbnail && (
          <CardMedia
            component="img"
            alt={title}
            image={thumbnail}
            style={styles.media}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Authors: {authors}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

const styles = {
  card: {
    width: 200, // Card width
    height: 350, // Card height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 140, // Image height
    objectFit: 'cover',
  },
};

export default BookDetails;
