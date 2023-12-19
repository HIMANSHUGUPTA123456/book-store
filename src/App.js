import React from "react";
import Header from "./components/Appbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Form from "./components/form";
import Cards from "./components/Allbook";
import Update from "./components/update";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main>
        <Router>
          <header>
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/all-books" element={<Cards />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
