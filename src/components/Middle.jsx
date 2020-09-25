import React from "react";
import style from "./css/Middle.module.css";
import thumb from "./assets/thumb.png";


const Middle = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <p className={style.para}>
            <span>Home</span>
            <span>
              <i class="fas fa-angle-double-right"></i>
            </span>
            <span>Goals</span>
            <span>
              <i class="fas fa-angle-double-right"></i>
            </span>
            <span>Explorer</span>
            <span>
              <i class="fas fa-angle-right"></i>
            </span>
          </p>
          <h2>Trip to the Palace of Versailles</h2>
          <h6>ONLINE MUSEUM 8+ Years</h6>
        </div>
        <div className="col-lg-6 d-flex  justify-content-center align-item-center">
        <button className={style.thumb}><span><img src={thumb} alt=""/></span><span>Recommended</span></button>
        </div>
      </div>
    </>
  );
};

export default Middle;
