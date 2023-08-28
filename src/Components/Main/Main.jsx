import React, { useState } from "react";
import Styles from "./Main.module.css";
import AssesmentDetails from "../AssesmentDetails/AssesmentDetails/AssesmentDetails";
import AssesmentCard from "../AssesmentCard/AssesmentCard";
import NewAssesmentCard from "../NewAssesmentCard/NewAssesmentCard";
import Modal from "../Modal/Modal";

function Main({ sideBarMobile, setsideBarMobile }) {
  const [isOpen, setisOpen] = useState(false);
  const [OpenMainContent, setOpenMainContent] = useState(false);

  const handleMainContent = () => {
    setOpenMainContent((prev) => !prev);
  };

  const handleMobileSideBarClick = () => {
    setsideBarMobile((prev) => !prev);
  };

  return (
    <div className={Styles.LayoutWrapper}>
      <div
        onClick={handleMobileSideBarClick}
        className={Styles.mobileSideBaricon}
      >
        <img src={require("../../Assets/Mobilesandwitch.png")} alt="" />
        <h2>Assesment</h2>
      </div>
      <header className={Styles.assignmentHeaderMobile}>
        <span className={Styles.Title}>My Assessments</span>
        <span className={Styles.subTitle}>Unstop Assessments</span>
      </header>
      <header className={Styles.assignmentHeaderWeb}>
        <span className={Styles.Title}>Assessment</span>
        <span className={Styles.subTitle}>
          My Assessments <hr />
        </span>
      </header>
      {OpenMainContent ? (
        <div className={Styles.contentMobile}>
          <div className={Styles.AssesmetOverviewMobile}>
            Assessments Overview
          </div>
          <div className={Styles.AssesmentDetails}>
            <div className={`${Styles.AssesmentSection} ${Styles.item1}`}>
              <div>Total Assessment</div>
              <div className={Styles.AssesmentSectionDetails}>
                <img
                  src={require("../../Assets/equals.png")}
                  alt="Equals img"
                />
                <span>34</span>
              </div>
            </div>
            <div className={`${Styles.AssesmentSection} ${Styles.item2}`}>
              <div>Candidates</div>
              <div className={Styles.AssesmentSectionDetails}>
                <img
                  src={require("../../Assets/people.png")}
                  alt="Equals img"
                />
                <AssesmentDetails
                  value={"11,145"}
                  plusValue={89}
                  subTitle={"Total Candidate"}
                />

                <AssesmentDetails
                  value={"11,145"}
                  plusValue={89}
                  subTitle={"Who Attamped"}
                />
              </div>
            </div>
            <div className={`${Styles.AssesmentSection} ${Styles.item3}`}>
              <div>Candidates Source</div>
              <div className={Styles.AssesmentSectionDetails}>
                <img
                  src={require("../../Assets/WorldPink.png")}
                  alt="Equals img"
                />
                <AssesmentDetails
                  value={"11,000"}
                  plusValue={89}
                  subTitle={"E-mail"}
                />
                <span className={Styles.vr}></span>
                <AssesmentDetails
                  value={"145"}
                  plusValue={89}
                  subTitle={"Social Share"}
                />
                <AssesmentDetails
                  value={"145"}
                  plusValue={89}
                  subTitle={"Unique Link"}
                />
              </div>
            </div>
            <div className={`${Styles.AssesmentSection} ${Styles.item4}`}>
              <div>Total Purposes</div>
              <div className={Styles.AssesmentSectionDetails}>
                <img src={require("../../Assets/Link.png")} alt="Equals img" />
                <span>11</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={Styles.AssesmentOptionsWrapper}>
        <div className={Styles.AssesmentTitlemobile}>My Assessment</div>
        <div className={Styles.AssesmentIcons}>
          <img src={require("../../Assets/Search.png")} alt="Search" />
          <img src={require("../../Assets/Funnel.png")} alt="Funnel" />
          <img
            onClick={handleMainContent}
            src={require("../../Assets/bar_chart.png")}
            alt="Bar"
          />
        </div>
      </div>
      {isOpen && <Modal setisOpen={setisOpen} />}

      <div className={Styles.content}>
        <div className={Styles.AssesmetOverviewMobile}>
          Assessments Overview
        </div>
        <div className={Styles.AssesmentDetails}>
          <div className={`${Styles.AssesmentSection} ${Styles.item1}`}>
            <div>Total Assessment</div>
            <div className={Styles.AssesmentSectionDetails}>
              <img src={require("../../Assets/equals.png")} alt="Equals img" />
              <span>34</span>
            </div>
          </div>
          <div className={`${Styles.AssesmentSection} ${Styles.item2}`}>
            <div>Candidates</div>
            <div className={Styles.AssesmentSectionDetails}>
              <img src={require("../../Assets/people.png")} alt="Equals img" />
              <AssesmentDetails
                value={"11,145"}
                plusValue={89}
                subTitle={"Total Candidate"}
              />

              <AssesmentDetails
                value={"11,145"}
                plusValue={89}
                subTitle={"Who Attamped"}
              />
            </div>
          </div>
          <div className={`${Styles.AssesmentSection} ${Styles.item3}`}>
            <div>Candidates Source</div>
            <div className={Styles.AssesmentSectionDetails}>
              <img
                src={require("../../Assets/WorldPink.png")}
                alt="Equals img"
              />
              <AssesmentDetails
                value={"11,000"}
                plusValue={89}
                subTitle={"E-mail"}
              />
              <span className={Styles.vr}></span>
              <AssesmentDetails
                value={"145"}
                plusValue={89}
                subTitle={"Social Share"}
              />
              <AssesmentDetails
                value={"145"}
                plusValue={89}
                subTitle={"Unique Link"}
              />
            </div>
          </div>
          <div className={`${Styles.AssesmentSection} ${Styles.item4}`}>
            <div>Total Purposes</div>
            <div className={Styles.AssesmentSectionDetails}>
              <img src={require("../../Assets/Link.png")} alt="Equals img" />
              <span>11</span>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.AssignmentCardsWrapper}>
        <div className={Styles.AssesmentSubtitle}>My Assessment</div>
        <div className={Styles.AssignmentCards}>
          <NewAssesmentCard setisOpen={setisOpen} />
          <AssesmentCard />
          <AssesmentCard />
        </div>
      </div>
    </div>
  );
}

export default Main;
