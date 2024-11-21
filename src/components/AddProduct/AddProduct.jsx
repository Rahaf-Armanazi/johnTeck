import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddProduct.css";
import InfoProd from "../InsertInfoProduct/InfoProd";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import axios from "axios";

Modal.setAppElement("#root");

const AddProduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal =()=> setModalIsOpen(false);
  // عرض البيانات من الداتا
  const [productinfo, setproductInfo] = useState([]);
  // const getType = async () => {
  //   const response = await axios.get("/AllProducts");
  //   setproductInfo(response.data);
  // };

  // useEffect(() => {
  //   getType();
  // }, []);

  // دالة لإضافة المنتج الجديد إلى القائمة
  const addProductToList = (newProduct) => {
    setproductInfo((prevProducts) => [...prevProducts, newProduct]);
  };

  const navigate = useNavigate(); // استخدام useNavigate للانتقال بعد الحفظ
  
  return (
    <div>
      <button className="add" onClick={openModal}>
        <h2> Add New Product </h2>
        <FontAwesomeIcon
         icon={faPlus} size="2x" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Add Product Modal"
        className="popupWindow"
        overlayClassName="modal-overlay"
      >
        <InfoProd h1="Add New Product" 
        endApi="AddProducts"
        closeModal={closeModal}
        addProductToList={addProductToList} // تمرير الدالة لإضافة المنتج الجديد
        navigate={navigate}
        // getType={getType}
        />
      </Modal>
      {/* <div>
        {productinfo.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div> */}
      {/* <div>
        {productinfo.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.Description}</p>
            {product.image && <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />}
            {product.pdf && (
              <a href={product.pdf} target="_blank" rel="noopener noreferrer">
                View PDF
              </a>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AddProduct;
