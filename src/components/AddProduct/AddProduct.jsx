import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddProduct.css";
import InfoProd from "../InsertInfoProduct/InfoProd";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import axios from "axios";

Modal.setAppElement("#root");

const AddProduct = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal =()=> setModalIsOpen(false);
  // عرض البيانات من الداتا
  const [productinfo, setproductInfo] = useState([]);
  const getType = async () => {
    const response = await axios.get("http://192.168.43.97:4784/AllProducts");
    setproductInfo(response.data);
  };

  useEffect(() => {
    getType();
  }, []);

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
        // getType={getType}
        navigate={navigate}
        />
      </Modal>
    </div>
  );
};

export default AddProduct;
