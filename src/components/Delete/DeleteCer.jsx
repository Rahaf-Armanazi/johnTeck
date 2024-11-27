import React from "react";
import axios from "axios";

const DeleteCer = (props) => {
  const deleteprod = async (id) => {
    try {
      const req = await axios.post(`http://172.17.17.38:8000/api/delete`, {
        id,
      });
      console.log("Deleted successfully:", req.data); // تحقق من الاستجابة
      props.getType();
      props.closedelete();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>https://chatgpt.com/c/67458fb7-82e0-8002-8f84-7e2e5fb5482e
        http://172.17.17.38:8000/api/products
      <h1> Are you sure you want top delete this Certificate ???{props.id}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <button
          className="btnSub"
          onClick={() => {
            console.log("Delete button clicked:", props.id); // تحقق من الضغط على الزر
            deleteprod(props.id);
          }}
        >
          Yes
        </button>
        <button onClick={props.closedelete}>No</button>
      </form>
    </div>
  );
};

export default DeleteCer;
