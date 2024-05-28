import React, { useEffect, useState } from "react";
import axios from "axios";
import like from "../images/like.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

interface Product {
  name: {
    common: string;
  };
  region: string;
  population: number;
  capital?: string[];
  flags?: {
    png: string;
  };
}

interface Props {}

export const List: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [res, setRes] = useState<Product[]>([]);
  const [likes, setLikes] = useState<number[]>([]);
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] = (newLikes[index] || 0) + 1;
    setLikes(newLikes);

    const likedProduct = res[index];
    setLikedProducts((prevLikedProducts) => [
      ...prevLikedProducts,
      likedProduct,
    ]);
  };

  const goToLikedPage = () => {
    navigate("/likes", { state: { likedProducts } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        setRes(data);
        setLikes(new Array(data.length).fill(0));
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (!res.length) return null;

  return (
    <div className="container mx-auto p-4">
      <span className="flex justify-center">
        <NavLink to={"/"}>
          <h2 className="text-5xl font-bold m-5 text-center">Countries List</h2>
        </NavLink>
        <button onClick={goToLikedPage}>
          <h2 className="text-5xl font-bold m-5 text-center">
            Countries Likes
          </h2>
        </button>
      </span>

      <ul className="space-y-4 flex items-center gap-5 justify-center flex-wrap">
        {res.map((product: Product, index: number) => (
          <div className="card" key={index}>
            {product.flags && (
              <img
                src={product.flags.png}
                alt={`${product.name.common} Flag`}
                className="card__flag"
              />
            )}
            <div className="card__content">
              <p className="card__title">{product.name.common}</p>
              <p className="text-gray-700">
                Capital: {product.capital ? product.capital[0] : "N/A"}
              </p>
              <p className="card__description">
                Region: {product.region}
                <br />
                Population: {product.population}
              </p>
              <div className="flex items-center justify-between">
                <div onClick={() => handleLike(index)}>
                  <img src={like} alt="like" width={20} height={20} />
                  <span>{likes[index]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
