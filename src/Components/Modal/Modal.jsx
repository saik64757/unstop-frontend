import Styles from "./Modal.module.css";

function Modal({ setisOpen }) {
  return (
    <div className="modalWrappermain">
      <div className={Styles.ModalWrapper}>
        <div className={Styles.Modalhead}>
          <div className={Styles.titleMobile}>Sub-Section Details</div>
          <div className={Styles.title}> Create new assessment</div>
          <img
            src={require("../../Assets/CloseButton.png")}
            alt="Button Close"
            onClick={() => setisOpen((prev) => !prev)}
          />
        </div>
        <div className={Styles.inputForm}>
          <div className={Styles.inputfromitem}>
            <label className={Styles.inputLable} htmlFor="nameofAssesment">
              Name of assessment
            </label>

            <input className={Styles.formInputs} placeholder="Type here" />
          </div>
          <div className={Styles.inputfromitem}>
            <label className={Styles.inputLable} htmlFor="nameofAssesment">
              Purpose of the test is
            </label>
            <select name="purpose" className={Styles.formInputsSelect}>
              <option className={Styles.SelectOptions}>Select</option>
              <option className={Styles.SelectOptions}>Option 1</option>
            </select>
          </div>
          <div className={Styles.inputfromitem}>
            <label className={Styles.inputLable} htmlFor="nameofAssesment">
              Description
            </label>
            <select name="purpose" className={Styles.formInputsSelect}>
              <option className={Styles.SelectOptions}>Select</option>
              <option className={Styles.SelectOptions}>Option 1</option>
            </select>
          </div>
          <div className={Styles.inputfromitem}>
            <div className={Styles.inputLable}>Skills</div>
            <div className={Styles.Skillview}>
              <div className={Styles.SkillPilsWrapper}>
                <div className={Styles.skillPill}>
                  UI/UX and Design
                  <img src={require("../../Assets/CloseButton.png")} alt="" />
                </div>
                <div className={Styles.skillPill}>
                  No of Question
                  <img src={require("../../Assets/CloseButton.png")} alt="" />
                </div>
                <div className={Styles.skillPill}>
                  Web Development
                  <img src={require("../../Assets/CloseButton.png")} alt="" />
                </div>
                <div className={Styles.skillPill}>
                  UI/UX and Design
                  <img src={require("../../Assets/CloseButton.png")} alt="" />
                </div>
                <div className={Styles.skillPill}>
                  Web Development
                  <img src={require("../../Assets/CloseButton.png")} alt="" />
                </div>
              </div>
              <div className={Styles.SkillTypehere}>Type here</div>
            </div>
          </div>
          <div className={Styles.inputfromitem}>
            <label className={Styles.inputLable} htmlFor="nameofAssesment">
              Duration of assessment
            </label>
            <input className={Styles.formInputs} placeholder="HH:MM:SS" />
          </div>
        </div>
        <div className={Styles.buttonWrapper}>
          <button className={Styles.buttonsave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
