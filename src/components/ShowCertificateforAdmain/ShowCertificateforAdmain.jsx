import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد المكون
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونات
import "./ShowCertificateforAdmain.css";
import "../../pages/Certificates/Certificates.css";
import DeleteCer from "../Delete/DeleteCer";

const ShowCertificateforAdmain = () => {
    const [selectedCer, setSelectedCer] = useState(null); // حالة المنتج المختار
    // تعريف دوال فتح وإغلاق المودال للحذف
  const [modalOpen, setModalOpen] = useState(false);
  const opendelete = (product) => {
    setSelectedCer(product);
    setModalOpen(true);
  };
  const closedelete = () => setModalOpen(false);

  // عرض البيانات من الداتا
  const [cerinfo, setcerInfo] = useState([]);
  const getCer = async () => {
    const response = await axios.get
    // ("http://172.17.17.38:8000/api/products");
    ("https://johntekvalves.com/backend/api/certificates");
    setcerInfo(response.data);
  };

  useEffect(() => {
    getCer();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const handlePdfClick = (e) => {
    setIsLoading(true);
    // يسمح بتنزيل الملف بعد التأكد من تحميل الرابط
    setTimeout(() => setIsLoading(false), 5000); // توقيت اختياري
  };

  const ShowCer=cerinfo?.map((i)=>(
    <div className="cer1">
    <a
      href={`https://johntekvalves.com/backend/storage/Certificates/pdf/${i.pdf}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handlePdfClick}
    >
      {isLoading ? (
        <span>Loading PDF...</span>
      ) : (
        <img
          className="cer2"
          src={`https://johntekvalves.com/backend/storage/Certificates/image/${i.image}`}
          alt="helooo i am not heer"
        />
      )}
    </a>
  </div>
  ))
  return (
    <div>
       {ShowCer} 
       <Modal
        isOpen={modalOpen}
        contentLabel="delete Product Modal"
        className="popupWindow"
        overlayClassName="modal-overlay"
      >
        {selectedCer && (
          <>
            <DeleteCer
              closedelete={closedelete}
              id={selectedCer.id}
              getType={getCer}
            />
          </>
        )}
      </Modal>
    </div>
  )
}

export default ShowCertificateforAdmain