import RICE from './img/Rice.png'
import RCNL from './img/RCNL.png'
import UD from './img/University of Delaware.png'
import HORC from './img/HORC_Logo_LightBG.png'
import AGILENT from './img/Agilent.jpg'

import {Link} from "react-router-dom";
import './BoxWithImage.css'; // Import your CSS file

function Experience () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Experience</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to={"rcnl"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={RCNL} alt="RCNL"/>
                                </div>
                                <div className="card-title fw-bold">Research Assistant</div>
                                <div className="card-subtext fw-bold">2023 - Present</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"rice-phd"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={RICE} style={{ width: '80%' }} alt="RICE"/>
                                </div>
                                <div className="card-title fw-bold">Ph.D. in Mechanical Engineering</div>
                                <div className="card-subtext fw-bold">2023 - Present</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"horc-lab"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={HORC} alt="HORC"/>
                                </div>
                                <div className="card-title fw-bold">Research Assistant</div>
                                <div className="card-subtext fw-bold">2021 - 2023</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"delaware-ta"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" style={{ width: '50%' }} src={UD} alt="UD"/>
                                </div>
                                <div className="card-title fw-bold">Teaching Assistant</div>
                                <div className="card-subtext fw-bold">2019 - 2023</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"delaware-degree"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" style={{ width: '50%' }} src={UD} alt="UD"/>
                                </div>
                                <div className="card-title fw-bold">Joint BS/MS Degree in Mechanical Engineering</div>
                                <div className="card-subtext fw-bold">2022 - 2023</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"agilent"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" style={{ width: '100%' }} src={AGILENT} alt="AGILENT"/>
                                </div>
                                <div className="card-title fw-bold">Procurement Intern</div>
                                <div className="card-subtext fw-bold">2021</div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Experience;