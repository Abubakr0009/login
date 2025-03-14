import React from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import getData from "../hooks/getData";
import Card from "../components/Card";

export const Home = () => {
  const { data, loading, error } = getData("/products");

  return (
    <div>
      <Header />
      <Brands />

      <div className="grid grid-cols-4">
        {data?.items?.map((product, index) => {
          return <Card {...product} key={index} />;
        })}
      </div>
    </div>
  );
};
