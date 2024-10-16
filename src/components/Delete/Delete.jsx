import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Delete = (props) => {
  const deleteprod = async (productId) => {
    try {
      const req = await axios.post(
        `http://192.168.43.97:4784/deleteProducts/${productId}`
      );
      console.log("Deleted successfully:", req.data); // تحقق من الاستجابة
      // SetProdInfo(prodinfo.filter((element) => element.id !== productId));
      props.getType();
      props.closedelete();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1> Are you sure you want top delete this product ???{props.productId}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <button
          className="btnSub"
          onClick={() => {
            console.log("Delete button clicked:", props.productId); // تحقق من الضغط على الزر
            deleteprod(props.productId);
          }}
        >
          Yes
        </button>
        <button onClick={props.closedelete}>No</button>
      </form>
    </div>
  );
};
