import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AddCer.css";

const AddCer = () => {
    const [showModal, setShowModal] = useState(false);
    const[image,SetImage]=useState("");
    const[pdf,SetPdf]=useState("");
    const navigate=useNavigate();

    const handleOpenModal = () => {
        setShowModal(true);
      };

    const handleCloseModal = () => {
        setShowModal(false);
      };

      async function savecertifi(e) {
        e.preventDefault(e);
        const formData = new FormData();
        if (image instanceof File) {
            formData.append("image", image);
          }
        if (pdf instanceof File) {
            formData.append("pdf", pdf);
          }
        try {
            const res = await axios.post(`
              http://172.17.17.38:8000/api/certificate`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
              if (res.status === 200) {
                // بعد حفظ البيانات بنجاح، نقوم بتحديث المنتجات
                const newCer = res.data; // نحصل على المنتج الجديد من الاستجابة
                // addProductToList(newCer);
                console.log(newCer);
          
                // الانتقال إلى صفحة Dashboard
                navigate("/CertificateDash", { replace: true });
          
                }
            } catch (err) {
              console.log(err); // طباعة الخطأ في وحدة التحكم
            }    
      }
  return (
    <div>AddCer</div>
  )
}

export default AddCer