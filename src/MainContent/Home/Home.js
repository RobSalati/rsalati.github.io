import './Home.css'
import RobImage from './Rob_2022.jpeg'

function Home () {
    return (
        <div>
            <div className="d-flex justify-content-center mx-5">
                <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center"
                     style={{maxWidth: '1536px'}}>
                    {/* Image */}
                    <img src={RobImage} alt="Rob img" className="main-image m-3"></img>
                    {/* Details */}
                    <div className="d-flex flex-column justify-content-center m-3">
                        <h1 className="fw-bold">Robert Salati</h1>
                        <span> I am a first year PhD Student at Rice University. </span>
                        <br/>
                        <span> Currently I am working as a graduate research assistant in the Rice Computational Neuromechanics Lab (
                            <a href="https://rcnl.rice.edu/" target="_blank" rel="noopener noreferrer"
                               style={{marginRight: '0px'}}>RCNL</a>
                            ). My research focus is on using personalized neuromusculoskeletal models to design patient specific surgical procedures for treating movment disorders.
                        </span>
                        <div className="row">
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Interests</h3>
                                <ul className="ul-interests mb-0">
                                    <li>Biomechanics</li>
                                    <li>Predictive Gait Modeling</li>
                                    <li>Surgical Design</li>
                                    <li>Prosthetic and Exoskeleton Control</li>
                                    <li>Data Science</li>
                                </ul>
                            </div>
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Education</h3>
                                <ul className="ul-edu fa-ul mb-2">
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                Ph.D., Mechanical Engineering, 2028 (expected)
                                            </p>
                                            <p className="institution" style={{fontWeight: 300, marginBottom: '2px'}}>
                                                Rice University
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                MS, Robotics, 2023
                                            </p>
                                            <p className="institution" style={{fontWeight: 300, marginBottom: '2px'}}>
                                                University of Delaware
                                            </p></div>
                                    </li>
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                BS, Mechanical Engineering, 2022
                                            </p>
                                            <p className="institution" style={{fontWeight: 300, marginBottom: '2px'}}>
                                                University of Delaware
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;