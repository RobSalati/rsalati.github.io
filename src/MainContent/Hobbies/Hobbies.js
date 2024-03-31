import Coffee from "./img/Coffee.png"
import Eagles from "./img/eagles.webp"
import Squirrel from "./img/squirrel.jpg"
import Plants from "./img/plants.webp"
import {Link} from "react-router-dom";

function Hobbies () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center">

                <h1 className="fw-bold">Hobbies</h1>

                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="Coffee" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'red' }}>
                        {/*<img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>*/}
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={Coffee} id='coffee' alt="coffee header" style={{ width: '150%'}}/>
                                </div>
                                <div className="card-title-projects fw-bold">Coffee</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="Sports" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'red' }}>
                        {/*<img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>*/}
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={Eagles} id='sports' alt="sport header"style={{ width: '130%'}}/>
                                </div>
                                <div className="card-title-projects fw-bold">Sports</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="Squirrels" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'red' }}>
                        {/*<img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>*/}
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={Squirrel} id='squirrel' alt="squirrel header" style={{ width: '150%'}}/>
                                </div>
                                <div className="card-title-projects fw-bold">Squirrels</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="Plants" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'red' }}>
                        {/*<img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>*/}
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={Plants} id='plants' alt="plant header" style={{ width: '100%'}}/>
                                </div>
                                <div className="card-title-projects fw-bold">Plants</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;