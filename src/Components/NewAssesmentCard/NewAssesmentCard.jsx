import Styles from "./NewAssesmentCard.module.css";

function NewAssesmentCard({ setisOpen }) {
  return (
    <div className={Styles.newCardWrapper}>
      <div
        onClick={() => {
          setisOpen((prev) => !prev);
        }}
      >
        <img
          className={Styles.Addimage}
          src={require("../../Assets/AddSybmol.png")}
          alt=""
        />
      </div>
      <div>New Assessment</div>
      <p>
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </p>
    </div>
  );
}

export default NewAssesmentCard;
