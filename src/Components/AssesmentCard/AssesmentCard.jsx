import Styles from "./AssesmentCard.module.css";

function AssesmentCard() {
  return (
    <div className={Styles.cardWrapper}>
      <div className={Styles.SectionLogoButton}>
        <img
          className={Styles.SuitcaseLogo}
          src={require("../../Assets/suitcase.png")}
          alt="Suitcase ogos"
        />
        <div className={` ${Styles.sectionDetailsWrappermobile}`}>
          <p className={Styles.AssesmentTitle}>Math Assessment</p>
          <div className={Styles.AssesmentTime}>
            <p>Job</p>
            <div className={Styles.AssesmentCalender}>
              <img
                className={Styles.Vectorlogo}
                src={require("../../Assets/Vector.png")}
                alt="Vectore"
              />
              <span>20 Apr 2023</span>
            </div>
          </div>
        </div>
        <img
          className={Styles.threeDost}
          src={require("../../Assets/threedots.png")}
          alt="Threedots ogos"
        />
      </div>
      <div className={`${Styles.sectionDetailsWrapper}`}>
        <p className={Styles.AssesmentTitle}>Math Assessment</p>
        <div className={Styles.AssesmentTime}>
          <p>Job</p>
          <div className={Styles.AssesmentCalender}>
            <img
              className={Styles.Vectorlogo}
              src={require("../../Assets/Vector.png")}
              alt="Vectore"
            />
            <span>20 Apr 2023</span>
          </div>
        </div>
      </div>
      <hr className={Styles.BreakLine} />
      <div className={Styles.assesmentDuration}>
        <div className={Styles.assesmentDurationSetting}>
          <div>
            <div>00</div>
            <div>Duration</div>
          </div>
          <div>
            <div>00</div>
            <div>Question</div>
          </div>
        </div>
        <div className={Styles.sectionButtonWrapper}>
          <div className={Styles.linkButton}>
            <img src={require("../../Assets/Link_rotated.png")} alt="" />
            <p>Share</p>
          </div>
          <div className={Styles.AllusersProfile}>
            <span className={Styles.usersProfile}>SP</span>
            <span className={Styles.usersProfile}>SP</span>
            <span className={Styles.usersProfile}>SP</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssesmentCard;
