import ankle_prosthesis from "./AnkleProsthesis/img/subject_front_view.jpg"
import HTO from "./img/HTO.png"
import Mechatronics from "./img/mechatronics.png"
import SeniorDesign from "./img/CropScanning.jpg"
import {Link} from "react-router-dom";
import './BoxWithImage_projects.css'; // Import your CSS file

function Projects () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Projects</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="hto" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'red' }}>
                        {/*<img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>*/}
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={HTO} id='hto' alt="RCNL"/>
                                </div>
                                <div className="card-title-projects fw-bold">High Tibial Osteotomy</div>
                                <div className="card-subtext-projects fw-bold">2023 - Present</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="ankle-prosthesis" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'red' }}>
                        {/*<img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>*/}
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={ankle_prosthesis} id='prosthesis' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Ankle-foot Prosthesis</div>
                                <div className="card-subtext-projects fw-bold">2022 - 2023</div>
                            </div>
                        </div>
                    </Link>

                    {/* <Link to="mechatronics" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'red' }}>
                        <img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={Mechatronics} id='mechatronics' alt="UD"/>
                                </div>
                                <div className="card-title-projects fw-bold">Autonomous Search & Rescue Robots</div>
                                <div className="card-subtext-projects fw-bold">2022</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="senior-design" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'red' }}>
                        <img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={SeniorDesign} id='SeniorDesign' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Automated Hydroponic Crop Scanning System</div>
                                <div className="card-subtext-projects fw-bold">2021</div>
                            </div>
                        </div>
                    </Link> */}

                </div>
            </div>
        </div>
    )
}

export default Projects;