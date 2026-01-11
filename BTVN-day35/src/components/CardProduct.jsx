import React, { useEffect, useState, use } from "react";
import { Link, NavLink } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../pages/Products";
export default function CardProduct() {
  const { searchParams, debounce } = use(ProductContext);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Lỗi fetch api");
        }
        const data = await res.json();
        const products = data.products;
        setProducts(products);
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchSearchProducts = async () => {
      try {
        if (!debounce.trim()) {
          setSearchProducts([]);
          return;
        }
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debounce}`
        );
        if (!res.ok) {
          throw new Error("Lỗi fetch api");
        }
        const data = await res.json();
        const products = data.products;
        setSearchProducts(products);
        console.log(products);
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchProducts();
  }, [debounce]);

  if (loading) {
    return <Loading />;
  }

  if (searchParams.get("q") && searchProducts.length === 0) {
    return <h1 className="text-3xl font-bold my-5">Không tìm thấy kết quả</h1>;
  }

  if (searchProducts.length > 0) {
    return (
      <div className="flex flex-wrap gap-5 my-5">
        {searchProducts.map((product, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md flex flex-col justify-center p-5 w-[calc((100%-60px)/4)]"
          >
            <img
              src={product.images[0]}
              alt="image"
              className="w-full h-48 object-cover mb-5"
            />
            <h3 className="text-xl font-bold mb-5">{product.title}</h3>
            <p className="mb-5 font-bold text-xl text-red-500">
              ${product.price}
            </p>
            <NavLink
              to={`/products/${product.id}`}
              className="border w-fit px-3 py-2 rounded-md cursor-pointer bg-blue-500 text-white hover:bg-pink-500"
            >
              Xem chi tiết
            </NavLink>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-5 my-5">
      {products.map((product, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-md flex flex-col justify-center p-5 w-[calc((100%-60px)/4)]"
        >
          <img
            src={product.images[0]}
            alt="image"
            className="w-full h-48 object-cover mb-5"
          />
          <h3 className="text-xl font-bold mb-5">{product.title}</h3>
          <p className="mb-5 font-bold text-xl text-red-500">
            ${product.price}
          </p>
          <NavLink
            to={`/products/${product.id}`}
            className="border w-fit px-3 py-2 rounded-md cursor-pointer bg-blue-500 text-white hover:bg-pink-500"
          >
            Xem chi tiết
          </NavLink>
        </div>
      ))}
    </div>
  );
}
