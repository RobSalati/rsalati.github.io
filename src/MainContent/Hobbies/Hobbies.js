import Sax from "./img/sax.png";
import {Link} from "react-router-dom";

function Hobbies () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">

                <h1 className="fw-bold">Hobbies</h1>

                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="jazz-saxophone" className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={Sax} alt="Sax img" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Jazz Saxophone</h4>
                        <span className="m-2">2017-2018 RIP</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Hobbies;