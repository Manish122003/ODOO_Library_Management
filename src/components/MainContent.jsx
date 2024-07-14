// MainComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Container } from '@mui/material';
import BookDetails from './BookDetails';

const MainComponent = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const newArrivalsISBNs = ['9781787123427', '9789325298699', '9325298694', '9789352031016', '9352031016', '9781450387279'];
  const trendingISBNs = ['1450387276', '9781450387279', '9789352031016', '9325298694', '9789325298699', '9781787123427'];

  const fetchBooks = async (isbnList) => {
    try {
      const requests = isbnList.map(isbn =>
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      );

      const responses = await Promise.all(requests);

      return responses.map(response => response.data.items[0]);
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
      console.error('Error fetching books:', err);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');

      const fetchedNewArrivals = await fetchBooks(newArrivalsISBNs);
      const fetchedTrending = await fetchBooks(trendingISBNs);

      setNewArrivals(fetchedNewArrivals);
      setTrending(fetchedTrending);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>New Arrivals</Typography>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Grid container spacing={2}>
            {newArrivals.map(book => (
              <Grid item xs={12} sm={6} md={4} lg={6} key={book.id}>
                <BookDetails book={book} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>Trending</Typography>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Grid container spacing={2}>
            {trending.map(book => (
              <Grid item xs={12} sm={6} md={4} lg={6} key={book.id}>
                <BookDetails book={book} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainComponent;
