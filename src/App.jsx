import React from "react";
import Header from "./component/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Main from "./component/Main/Main";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./component/Spinner/Spinner";
import axios from "axios";

const url = 'https://api.escuelajs.co/api/v1/categories/'

const btnNames = [
  "Clothes",
  "Electronics",
  "Furniture",
  "Shoes",
  "Miscellaneous",
  "MrBin",
  "Casual Wear",
];

const App = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios(url)
      setCategories(res.data)
    }
    getCategories()
  }, [])

  if (categories.length === 0) {
    return <Spinner />
  }

  return (
    <div className="container mx-auto">
      <Header />
      <Main />
      {categories.map((btn) => {
        return (
          <button onClick={() => navigate('/categories/' + btn.id)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2">
            {btn.name}
          </button>
        );
      })}
      <AppRoutes />
    </div>
  );
};

export default App;
