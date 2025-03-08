import React from "react";
import Header from "../components/Header";
// import Brands from "../components/Brands";
// import getData from "../hooks/getData";
// import Card from "../components/Card";

export const Home = () => {
  // const { data, loading, error } = getData("/products");
  // console.log(data?.items);

  return (
    <div>
      <Header />
      {/* <Brands /> */}

      {/* <div>
        {data?.items?.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
            <h3>{product.name}</h3>
            <p>ID: {product.id}</p>
            <p>Narx: {product.price} so‘m</p>
            <p>Batafsil: {product.description}</p>
            {product.image && <img src={product.image} alt={product.name} width="150" />}
          </div>
        ))}
      </div> */}

{/* 
      <div className="grid grid-cols-4">
        {data?.items?.map((product, index) => {
          return <Card {...product} key={index} />;
        })}
      </div> */}
    </div>


  );
};
