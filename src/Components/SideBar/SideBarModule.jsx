import React from "react";
import Styles from "./SideBarmobile.module.css";

function SideBarMobile({ setsideBarMobile }) {
  return (
    <div className="sideBarWrapperMobile">
      <div className={Styles.sideBarContentMobile}>
        <div className={Styles.menuLayout}>
          <div>Menu</div>
          <div
            onClick={() => {
              setsideBarMobile((prev) => !prev);
            }}
          >
            <img src={require("../../Assets/CloseButton.png")} alt="" />
          </div>
        </div>
        <div className={Styles.menuSelection}>
          <img src={require("../../Assets/Dashboard_Logo.png")} alt="" />
          <div>Dashboard</div>
        </div>
        <div className={`${Styles.menuSelection} ${Styles.SelectedMenuOption}`}>
          <img src={require("../../Assets/note_alt.png")} alt="" />
          <div>Assessment</div>
        </div>
        <div className={Styles.menuSelection}>
          <img src={require("../../Assets/quiz.png")} alt="" />
          <div>My Library</div>
        </div>
        <div className={Styles.menuSelection}>
          <div className={Styles.RoundStatusStyles}>
            <img src={require("../../Assets/admin_meds.png")} alt="" />
            <div>Round Status</div>
          </div>
          <button className={Styles.sideBarSection2Mobile}>Admin</button>
        </div>
      </div>
    </div>
  );
}

export default SideBarMobile;
