import { useMediaQuery } from "react-responsive";
import logo from "../../assets/logo.png";
import "../../css/Navbar.css";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 40em)" });

  return (
    <>{isDesktop ? <DesktopNav logo={logo} /> : <MobileNav logo={logo} />}</>
  );
};

export default Navbar;
