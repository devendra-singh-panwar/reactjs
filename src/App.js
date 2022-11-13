// import React from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import React, { useState} from "react";
function App() {
// var [productList,setproductList]=useState(products);
//   const incrementQuantity=(index)=>{
//     let newProductList=[...productList]
//     newProductList[index].quantity++
//     setproductList(newProductList);
//   }
  const productList = [
    {
      name: "iphone",
      price: 2300,
      brand: "iphone10s",
      quantity: 0
    },
    {
      name: "android",
      price: 3434,
      brand: "xiomi",
      quantity: 0
    }
  ]
  let [products,setproductList]=useState(productList)

  const incrementQuantity=(index)=>{ 
    console.log("working");
    console.log(index);
    let newProductList=[...products]
    newProductList[index].quantity++
    console.log(products);
    setproductList(newProductList ) 
  }
  return (
    <>
      <Navbar />
      <main className="Container mt-5">
        <ProductList productList={productList} incrementQuantity={incrementQuantity}/>
      </main>
    </>
  );
}
export default App;
