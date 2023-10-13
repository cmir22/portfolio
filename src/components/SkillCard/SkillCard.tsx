import "./SkillCard.scss";

const SkillCard = ({ skillTitle, frontEndSkills }: any) => {
  return (
    <>
      <div className="skillCardContainer">
        <div className="titleSkillContianer">
          <h1>{skillTitle}</h1>
        </div>

        <div className="skillList">
          <ul>
            {frontEndSkills.map((element: any) => {
              return <li key={element}>{element}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
