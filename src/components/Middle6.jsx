import React from 'react'
import style from './css/middle6.module.css';

const Middle6 = () => {
    return(
        <>
         <br/>
        <br/>
         <h1 style={{textAlign:'center',fontWeight:'bolder'}} className={style.heading}>See what our students have created</h1>
         <br/><br/>
         <div className="container">
             <div className="row">
                 <div className="col">
                     <div className={style.img}>
                         <div className={style.child}></div>
                     </div>
                 </div>
             </div>
         </div>
        </>
    );
}

export default Middle6;
