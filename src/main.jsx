import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Academics = lazy(() => import("./components/Academics"));
const Admissions = lazy(() => import("./components/Admission"));
const Faculty = lazy(() => import("./components/Faculty"));
const StudentPage = lazy(() => import("./components/StudentPage"));
const Gallery = lazy(() => import("./components/Gallery"));
const ContactUs = lazy(() => import("./components/ContactUs"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><App /></Suspense>}>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
      <Route path="/about-us" element={<Suspense fallback={<div>Loading...</div>}><AboutUs /></Suspense>} />
      <Route path="/academics" element={<Suspense fallback={<div>Loading...</div>}><Academics /></Suspense>} />
      <Route path="/admissions" element={<Suspense fallback={<div>Loading...</div>}><Admissions /></Suspense>} />
      <Route path="/faculty" element={<Suspense fallback={<div>Loading...</div>}><Faculty /></Suspense>} />
      <Route path="/student" element={<Suspense fallback={<div>Loading...</div>}><StudentPage /></Suspense>} />
      <Route path="/gallery" element={<Suspense fallback={<div>Loading...</div>}><Gallery /></Suspense>} />
      <Route path="/contact-us" element={<Suspense fallback={<div>Loading...</div>}><ContactUs /></Suspense>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


