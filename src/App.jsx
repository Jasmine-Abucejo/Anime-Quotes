import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuoteList from "../pages/QuoteList";
import AddQuote from "../pages/AddQuote";
import EditQuotePage from "../pages/EditQuote";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  return (
    <div className="container bg-gray-200 min-h-screen min-w-screen  ">
      <Toaster />
      <Navbar />
      <div className="  pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <Routes>
            <Route path="/" element={<QuoteList />}></Route>
            <Route path="/add" element={<AddQuote />}></Route>
            <Route path="/edit/:id" element={<EditQuotePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
