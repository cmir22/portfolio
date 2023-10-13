import "./InformationCard.scss";
import MarkIcon from "../../../assets/Icons/mark.svg";
import SchoolIcon from "../../../assets/Icons/school.svg";
import ProfileImage from "../../../assets/images/profile_image.webp";
import GihubIcon from "../../../assets/images/github_icon.svg";
import LinkedInIcon from "../../../assets/images/linkedin_icon.svg";
import GmailIcon from "../../../assets/images/gmail_icon.svg";

const InformationCard = () => {
  return (
    <>
      <div className="informationCardContainer">
        <div className="headerSection">
          <div className="nameContainer">
            <h1>Cruz Ibarra</h1>
          </div>
        </div>
        <div className="middleSection">
          <div className="middleContainer">
            <div className="imageContainer">
              <img src={ProfileImage}></img>
            </div>

            <div className="middleContainerText">
              <div className="descriptionContainer">
                <img src={MarkIcon} />
                <p>San Diego CA.</p>
              </div>
              <div className="descriptionContainer">
                <img src={SchoolIcon} />
                <p>Computer Systems Engineer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottomSection">
          <div className="iconsContainer">
            <a
              href="https://github.com/cmir22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GihubIcon} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/cruz-ibarra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a
              href="mailto:isc.cruzibarra@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GmailIcon} alt="Gmail" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard;
