import React from "react";
import style from "./css/Middle2.module.css";

const Middle2 = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className={style.imgcontainer}>
            <button className={style.watchbtn}>
              <span>
                <i class="fas fa-play"></i>
              </span>
              <span>Watch trailer</span>
            </button>
          </div>
        </div>
        
        <div className="col-md-6">
          <br />
          <div className={style.timeslot}>
            <p>Live on</p>
            <span className={style.date}>29 june 2020</span>
            <span>for 60 min</span>
          </div>

          <br />
          <div className={style.timeslot}>
            <p>Choose Slot</p>
            <span>
              <button>10:30 AM</button>
            </span>
            <span>
              <button>5:30 PM</button>
            </span>
            <span>
              <button>6:30 PM</button>
            </span>
          </div>

          <br />
          <div className={style.timeslot}>
            <p>Class fee</p>
            <span>
              <button className={style.inrbtn}>
                <span>INR120</span>
                <span>INR 60</span>
              </button>
            </span>
            <span>
              <a href="#">Earn100+points</a>
            </span>
          </div>

          <br />
          <span>
            <button className={style.share}>Book This Class For Free</button>
          </span>
          <span>
            <button
              className={style.share}
              style={{ background: "white", color: "#FF3A58" }}
            >
              share
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Middle2;
