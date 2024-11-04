import './App.css';
import React, { Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Component/layout/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {routes} from './utils/routes'


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
          {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}

          </Routes>
        </Suspense>
      </Router>
      <ToastContainer
        icon={false}
        // position={toast.POSITION.BOTTOM_LEFT}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
