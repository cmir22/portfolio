import "./InformationCard.scss";

const InformationCard = () => {
  return (
    <>
      <div className="information_card">
        <div className="information_card__container">
          <div className="information_card__header">
            <h1>Cruz</h1>
          </div>
          <div className="information_card__body">
            <img src="../../../../public/profile_image.webp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard;
