import React from "react";
import Styles from "./AssesmentDetails.module.css";

function AssesmentDetails({ value, plusValue, subTitle }) {
  return (
    <div className={Styles.AssesmentDetailswrapper}>
      <div className={Styles.AssesmentNumns}>
        <div className={Styles.AddtionValue}>{value}</div>
        <div className={Styles.addtionSum}>+{plusValue}</div>
      </div>
      <div className={Styles.subTitle}>{subTitle}</div>
    </div>
  );
}

export default AssesmentDetails;
