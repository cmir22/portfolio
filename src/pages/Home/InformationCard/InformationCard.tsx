import { useState } from "react";
import ProfileImage from "../../../assets/images/profileImage.webp";
import GihubIcon from "../../../assets/images/github_icon.svg";
import LinkedInIcon from "../../../assets/images/linkedin_icon.svg";

type IconSelectableProps = {
  text: string;
};

const InformationCard = () => {
  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col items-center">
      <div className="flex justify-center items-center">
        <img src={ProfileImage} className="w-32 h-32" alt="Profile" />
      </div>
      <div className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 text-transparent bg-clip-text p-4 md:p-8">
        <p className="text-3xl md:text-4xl font-bold text-center">
          Cruz Ibarra
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-lg md:text-xl text-center text-white mt-4">
          Computer Systems Engineer
        </h2>
        <h2 className="text-lg md:text-xl text-center text-white pb-8">
          Phone: +1 619-638-9269
        </h2>
      </div>
      <IconSelectable text="isc.cruzibarra@gmail.com" />
      <div className="h-8 flex mt-4">
        <img
          src={GihubIcon}
          className="cursor-pointer mr-2"
          alt="GitHub"
          onClick={() => handleIconClick("https://www.github.com/cmir22")}
        />
        <img
          src={LinkedInIcon}
          className="cursor-pointer"
          alt="LinkedIn"
          onClick={() =>
            handleIconClick("https://www.linkedin.com/in/cruz-ibarra/")
          }
        />
      </div>
    </div>
  );
};

const IconSelectable = ({ text }: IconSelectableProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Create a temporary textarea element to copy the text
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);

    // Select and copy the text
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Set copied state to true
    setIsCopied(true);

    // Reset the copied state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <button
      className="border border-white p-3 md:p-4"
      onClick={handleCopyClick}
    >
      <p className={`text-white ${isCopied ? "opacity-50" : ""}`}>
        {isCopied ? "Copied 😁" : text}
      </p>
    </button>
  );
};

export default InformationCard;
