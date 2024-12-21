import "./main.css"
import Freebutton from "../freeButton/freebutton"
import img from "../../images/background.jpg"

function Main() {
    return (
        <div className="main" >
            <div className="txt">
                <div>
                    <h1>HELLO WORLD</h1>
                    <h2>NEW WORLD STARTING</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis atque ad cum omnis incidunt cumque alias, laudantium obcaecati accusantium.</p>
                    <Freebutton
                        nome="Explore now"
                    />
                </div>
            </div>
            <div className="img">
                <img src={img} alt="foto" />
            </div>
        </div>
    )
}

export default Main