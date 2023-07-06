import "./InformationCard.scss";
import MarkIcon from "../../../assets/Icons/mark.svg";
import SchoolIcon from "../../../assets/Icons/school.svg";
import ProfileImage from "../../../../public/profile_image.webp";

const InformationCard = () => {
  return (
    <>
      <div className="information_card">
        <div className="information_card__container">
          <div className="information_card__header">
            <h1>Cruz</h1>
          </div>
          <div className="information_card__body">
            {/* Image */}
            <div className="information_card__body_image">
              <img src={ProfileImage} />
            </div>
            {/* Description text */}
            <div className="information_card__description">
              <div className="information_card__text_icon">
                <img src={MarkIcon} />
                <p>San Diego CA.</p>
              </div>
              <div className="information_card__text_icon">
                <img src={SchoolIcon} />
                <p>Computer Systems Engineer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard;
