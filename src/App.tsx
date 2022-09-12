import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./app.scss"
import { Login, Register, ForgotPassword } from './containers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
