import React from "react";
import style from "./css/Middle.module.css";
import thumb from "./assets/thumb.png";
import cx from 'classnames';


const Middle = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className={`${style.utility} col-12`}>
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
        </div>
        <div className="col-sm-6 d-flex  justify-content-center">
          <div className={`${style.recommended} mt-5`}>
        <button className={style.thumb} ><span><img src={thumb} alt=""/></span><span>Recommended</span></button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
