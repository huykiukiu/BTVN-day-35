import React, { useEffect, useState } from "react";

export default function Pagination() {
  const [LIMIT, setLIMIT] = useState();
  const [TOTAL, setTOTAL] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Lỗi fetch api");
        }
        const data = await res.json();
        setLIMIT(data.limit);
        setTOTAL(data.total);
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  const totalPages = Math.ceil(LIMIT / TOTAL);
  return <div>Phân trang em chưa xong</div>;
}
