/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";
import CardProduct from "../components/CardProduct";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
export const ProductContext = createContext();
export default function Products() {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [debounce, setDebounce] = useState("");
  const handleChangeValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (newValue.trim()) {
      setSearchParams({ q: newValue });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setValue(q);
    setDebounce(q);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <ProductContext.Provider value={{ debounce, searchParams }}>
      <h1 className="text-3xl font-bold mb-3">Products</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border outline-none px-3 h-7"
        onChange={handleChangeValue}
        value={value}
      />
      <CardProduct />
      <Pagination />
    </ProductContext.Provider>
  );
}
