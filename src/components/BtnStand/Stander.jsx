import React, { useState, useEffect } from "react";
import "./Stander.css";

const Stander = () => {
  const [data, setData] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [showData, setShowData] = useState(false);

  const botton2 = () => {
    const mockData = {
      id: 1,
      name: "Standrres",
      description: "This is a sample description for testing.",
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(mockData), 1000); // تأخير 1 ثانية
    });
  };

  useEffect(() => {
    const getData = async () => {
      const result = await botton2();
      if (result) {
        setData(result);
        setIsButtonVisible(true);
      }
    };

    getData();
  }, []);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setShowData(true);
  };

  const handleHideData = (e) => {
    e.stopPropagation();
    setShowData(false);
  };

  return (
    <div className="botton_item" onClick={handleHideData}>
      {/* عرض الزر فقط إذا كانت حالة isButtonVisible true */}
      {isButtonVisible && (
        <button
          className="botton2 iner"
          type="submit"
          onClick={handleButtonClick}
        >
          Standers
        </button>
      )}

      {/* عرض النافذة المنبثقة */}
      {showData && data && (
        <>
          {/* نافذة منبثقة */}
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleHideData}>&times;</button>
            <div style={{ marginTop: "10px", textAlign: "left" }}>
              <p>
                <strong>Data Name:</strong> {data.name}
              </p>
              <p>
                <strong>Description:</strong> {data.description}
              </p>
            </div>
          </div>

          {/* Overlay */}
          <div className="overlay" onClick={handleHideData}></div>
        </>
      )}

      {/* رسالة تحميل أثناء انتظار البيانات */}
      {!isButtonVisible && !data && <p>Loading data...</p>}
    </div>
  );
};

export default Stander;