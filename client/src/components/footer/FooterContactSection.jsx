import React from "react";
import FooterContactElt from "./FooterContactElt";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

function FooterContactSection() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold">CONTACT US</h1>
      <div className="flex flex-col gap-2">
        <FooterContactElt
          icon={<CiLocationOn />}
          content={"Based in Abu Dhabi, UAE"}
        />
        <FooterContactElt icon={<CiMail />} content={"tronacademy@gmail.com"} />
        <FooterContactElt icon={<CiPhone />} content={"+91 1234567890"} />
      </div>
    </div>
  );
}

export default FooterContactSection;
