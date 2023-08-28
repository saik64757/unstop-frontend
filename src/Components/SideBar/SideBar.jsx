import React from "react";
import Styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={Styles.sideBarWrapper}>
      <div className={Styles.sideBarContent}>
        <div className={Styles.sideBarSection1}>
          <div className={Styles.sibarOptions}>
            <img
              src={require("../../Assets/Dashboard_Logo.png")}
              alt="Dashboard_Logo"
            />
            DashBoard
          </div>
          <div className={`${Styles.sibarOptions} ${Styles.selectedOption}`}>
            <img
              src={require("../../Assets/note_alt.png")}
              alt="Assesment_Logo"
            />
            Assesment
          </div>
          <div className={Styles.sibarOptions}>
            <img src={require("../../Assets/quiz.png")} alt="Assesment_Logo" />
            My Library
          </div>
        </div>
        <hr className={Styles.breakLine}/>
        <div className={Styles.sideBarSection2}>
          <button>Admin</button>
          <div className={Styles.sibarOptions}>
            <img
              src={require("../../Assets/admin_meds.png")}
              alt="Assesment_Logo"
            />
            Round Status
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
