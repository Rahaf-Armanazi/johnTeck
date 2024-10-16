import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد المكون
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونات
import "./Card.css";
import InfoProd from "../InsertInfoProduct/InfoProd";
import { Delete } from "../Delete/Delete";

const Card = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // حالة المنتج المختار
  const openModal = (product = null) => {
    setModalIsOpen(true);
    if (product) {
      setSelectedProduct(product); // تمرير بيانات المنتج
    } else {
      setSelectedProduct({ name: "", Description: "", Image: "", pdf: "" }); // فتح المودال لإضافة منتج جديد
    }
  };
  const closeModal = () => setModalIsOpen(false);

  // عرض البيانات من الداتا
  const [productinfo, setproductInfo] = useState([]);
  const getType = async () => {
    const response = await axios.get("http://192.168.43.97:4784/AllProducts");
    setproductInfo(response.data);
  };

  useEffect(() => {
    getType();
  }, []);

  // تعريف دوال فتح وإغلاق المودال للحذف
  const [modalOpen, setModalOpen] = useState(false);
  const opendelete = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };
  const closedelete = () => setModalOpen(false);

  const showname = productinfo?.map((i) => (
    <div key={i.id} className="card">
      <p>{i.id}</p>
      <img
        className="imageDashboard"
        src={`http://192.168.43.97:4784/images/${i.Image}`}
        alt="Product Image"
      />
      <div className="productdetails">
        <h1 className="productName">{i.name}</h1>
        <div className="PI">
          <p className="productdeDescription">{i.Description}</p>
          <Link to={`http://192.168.43.97:4784/Document/${i.pdf}`}>
            <img
              className="pdfuser"
              src={require("../../Assets/images__3_-removebg-preview.png")}
              alt="Product PDF"
            />
          </Link>
        </div>
      </div>
      <div className="icons">
        <div className="iconimage" onClick={() => openModal(i)}>
          <FontAwesomeIcon icon={faEdit} size="4x" />
        </div>
        <p className="nameicons1">Edit</p>
        <div className="iconimage" onClick={() => opendelete(i)}>
          <FontAwesomeIcon icon={faTrash} size="4x" />
        </div>
        <p className="nameicons2">Delete</p>
      </div>
    </div>
  ));

  return (
    <div>
      {showname}
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Product Modal"
        className="popupWindow"
        overlayClassName="modal-overlay"
      >
        {selectedProduct && (
          <InfoProd
            h1={selectedProduct.id ? "Update the Product" : "Add a New Product"}
            name={selectedProduct.name}
            Description={selectedProduct.Description}
            image={selectedProduct.Image}
            pdf={selectedProduct.pdf}
            endApi={
              selectedProduct.id
                ? `updateProducts/${selectedProduct.id}`
                : "addProduct"
            }
            closeModal={closeModal}
            getType={getType}
          />
        )}
      </Modal>
      <Modal
        isOpen={modalOpen}
        contentLabel="delete Product Modal"
        className="popupWindow"
        overlayClassName="modal-overlay"
      >
        {selectedProduct && (
          <>
            <Delete
              closedelete={closedelete}
              productId={selectedProduct.id}
              getType={getType}
            />
          </>
        )}
      </Modal>
    </div>
  );
};

export default Card;
