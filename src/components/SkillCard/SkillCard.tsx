const SkillCard = ({ skillTitle, frontEndSkills }: any) => {
  return (
    <div className="w-full h-auto p-16 border border-gray-700 rounded">
      <div className="titleSkillContianer">
        <h1 className="text-xl text-green-500">{skillTitle}</h1>
      </div>

      <div className="skillList pt-5">
        <ul className="pl-5">
          {frontEndSkills.map((element: any) => (
            <li
              key={element}
              className="py-2 text-white font-semibold text-sm flex items-center gap-3 rounded-md"
            >
              <div className="h-1 w-1 bg-white"></div> {element}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
