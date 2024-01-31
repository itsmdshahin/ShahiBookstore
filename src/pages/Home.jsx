import React from "react";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/BookList',
      element: <BookList />,
    },
    {
      path: '/AddABook',
      element: isLoggedIn ? <BookForm /> : <Login />,
    },
    {
      path: '/:id',
      element: isLoggedIn ? <BookDetail /> : <Login />,
    },
    {
      path: '/Register',
      element: isLoggedIn ? <Index /> : <Register />,
    },
    {
      path: '/Login',
      element: isLoggedIn ? <Index /> : <Login />,
    },
    {
      path: '/Profile',
      element: isLoggedIn ? <Profile /> : <Register />,
    },
  ])

  return (
    <>
      {/* <h1>Is LOGIN {isLoggedIn}</h1> */}
      <Header />
      <RouterProvider router={router} />
      <Footer />

    </>
  );
}

export default Home;
