import "./navbar.css"
import Img from "../Img/img";
import Menu from "../menu/menu";
import Freebutton from "../freeButton/freebutton";

function Navbar(){
    return (
        <div className="menu">
           <Img/>
           <Menu/>
           <Freebutton nome = "FREE CONSULTATION"/>
        </div>
    )
}

export default Navbar;