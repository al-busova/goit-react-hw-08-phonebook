// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, ContactsPage, Login, Registration  } from 'pages';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
  <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} />
      </>
  );
};
