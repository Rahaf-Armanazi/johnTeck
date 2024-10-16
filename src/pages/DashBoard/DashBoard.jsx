import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import AddProduct from "../../components/AddProduct/AddProduct";
import "./Dashboard.css";
import "../../components/Card/Card.css";

function DashBoard() {
  return (
    <div>
      <Header/>
      <div style={{ flex:"1", marginTop:"10%"}} >
      <AddProduct/>
      </div>
      <Card/>
      <Footer/>
    </div>
  )
}

export default DashBoard