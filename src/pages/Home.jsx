import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import BookDetail from "../components/BookDetail";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import Header from "../components/Header";
import Profile from "../pages/Profile";
import Index from "./Index";
import Footer from "../components/Footer";

const Home = () => {
  const isLoggedIn = window.localStorage.getItem('token') !== null;

  return (
    <>
      {/* <h1>Is LOGIN {isLoggedIn}</h1> */}
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/BookList" element={<BookList />} />
          <Route path="/AddABook" element={isLoggedIn ? <BookForm /> : <Login />} />
          <Route path="/:id" element={isLoggedIn ? <BookDetail /> : <Login />} />
          <Route path="/Register" element={isLoggedIn ? <Index /> : <Register />} />
          <Route path="/Login" element={isLoggedIn ? <Index /> : <Login />} />
          <Route path="/Profile" element={isLoggedIn ? <Profile /> : <Register />} />
        </Routes>
      </Router>
      <Footer />

    </>
  );
}

export default Home;
