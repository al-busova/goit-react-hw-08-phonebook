import { lazy, useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from './Navigation/Navigation';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectIsFetchingCurrentUser } from 'redux/auth/selectorsAuth';
import  PublicRoute  from 'pages/PublicRoute';
import  PrivateRoute  from 'pages/PrivateRoute';
const Home = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const Registration = lazy(() => import('../pages/Registration'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense >
        <Routes>
            <Route
              path='/'
              element={
                  <Home />
              }
            />
            <Route
              path="/registration"
              element={
                <PublicRoute restricted>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<p>Page not found.</p>} />
          </Routes>
          </Suspense>
        <ToastContainer autoClose={1000} />
      </>
    )
  );
};
// <Routes>
//       <Route path="/" element={<AppBar />}>
//         <PublicRoute index path="/"><Home /></PublicRoute>
//         <PublicRoute path="/registration"><Registration /></PublicRoute>
//         <PublicRoute path="/login"><Login /></PublicRoute>
//         <PrivateRoute path="/contacts">
//           <ContactsPage />
//         </PrivateRoute>
//         <Route path="*" element={<p>Page not found.</p>} />
//       </Route>
//     </Routes>
