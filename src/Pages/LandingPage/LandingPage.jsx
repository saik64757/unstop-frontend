import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import Main from "../../Components/Main/Main";
import SideBar from "../../Components/SideBar/SideBar";
import SideBarMobile from "../../Components/SideBar/SideBarModule";

function LandingPage() {
  const [sideBarMobile, setsideBarMobile] = useState(false);

  return (
    <div className={styles.landingPageWrapper}>
      {sideBarMobile ? (
        <SideBarMobile setsideBarMobile={setsideBarMobile} />
      ) : (
        <SideBar />
      )}
      <Main sideBarMobile={sideBarMobile} setsideBarMobile={setsideBarMobile} />
    </div>
  );
}

export default LandingPage;
