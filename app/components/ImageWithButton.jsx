import React from "react";
import { useNavigate } from "react-router-dom";


export default function ImageWithButton (){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products/solid-state-drive-data-recovery-service-for-seagate-customers"); // Change to the route you want to go to
  };

  return (
    <div className="img-text-container">
      <img src="https://cdn.shopify.com/s/files/1/0584/8688/2388/files/atp_seagate_pdp_02.jpg?v=1740117810" alt="Example" className="image" />
      <button className="button" onClick={handleClick}>$749.00 | Buy Now</button>
    </div>
  );
};


