import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function ProductDetail() {
  const [thumbnail, setThumbnail] = useState("");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const handleChangeThumbnail = (e) => {
    setThumbnail(e.target.src);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Lỗi fetch api");
        }
        const product = await res.json();
        setThumbnail(product.images[0]);
        setProduct(product);
        console.log(product);
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-10 mb-5">
      <div className="flex gap-10 items-end mb-5">
        <div className="border border-gray-300 rounded-lg bg-neutral-200">
          <img src={thumbnail} className="w-[400px]" />
        </div>
        <ul className="flex gap-5">
          {product?.images?.map((image, index) => (
            <li key={index}>
              <img
                src={image}
                className={
                  image === thumbnail
                    ? "w-30 border-2 border-blue-500 rounded-lg cursor-pointer"
                    : "w-30 border-2 border-gray-300 rounded-lg cursor-pointer"
                }
                onClick={handleChangeThumbnail}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
        <p className="mb-5 font-bold text-xl text-red-500">${product.price}</p>
        <p className="">{product.description}</p>
      </div>
    </div>
  );
}
