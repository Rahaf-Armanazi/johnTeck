import React from 'react';
import "./DashBoardCertificate.css"
import { HeaderAdmin } from '../HeaderAdmin/HeaderAdmin';
import AddCer from '../AddCertificates/AddCer';
import ShowCertificateforAdmain from '../ShowCertificateforAdmain/ShowCertificateforAdmain';

const DashBoardCertificate = () => {
  return (
    <div>
        <HeaderAdmin/>
        <div style={{ flex:"1", marginTop:"10%"}} >
        <AddCer/>
        </div>
        <ShowCertificateforAdmain/>
    </div>
  )
}

export default DashBoardCertificate