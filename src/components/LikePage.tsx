import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

export const LikePage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { likedProducts } = location.state || { likedProducts: [] };

  return (
    <div>
      <h1 className="text-3xl font-bold m-5 text-center">Liked Products</h1>
      <ul className="space-y-4 flex items-center gap-5 justify-center flex-wrap">
        {likedProducts.length > 0 ? (
          likedProducts.map((product: Product, index: number) => (
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
              </div>
            </div>
          ))
        ) : (
          <p>No liked products</p>
        )}
      </ul>
      <button
        className="mt-4 px-8 py-2 bg-blue-500 text-white rounded-md fixed bottom-4 left-1/2 transform -translate-x-1/2"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};
