import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import BookDetails from './BookDetails';
import BookList from './BookList';



// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import { auth } from "./components/firebase";
import MainComponent from './components/MainContent';



function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <Router>
      <BookList />
      <MainComponent />
      <div className='App'>
      {/* <Route path="/login" element={<login />} /> */}
           
      </div>
    </Router>
  );
}

export default App;

