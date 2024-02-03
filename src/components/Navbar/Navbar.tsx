// import "./Navbar.scss";
// import BurgerIcon from "../../assets/Icons/burger.svg";

type ClickMenuItemProps = {
  title: string;
};

const NavBar = () => {
  return (
    <nav className="h-12 bg-black">
      <div className="flex justify-end items-center">
        <ClickMenuItem title={"Skills"} />
      </div>
    </nav>
  );
};

const ClickMenuItem = ({ title }: ClickMenuItemProps) => {
  return (
    <>
      <p className="text-white">{title}</p>
    </>
  );
};

export default NavBar;
