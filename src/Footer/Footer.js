import './Footer.css'
import PdfCV from './CV_Karakasis_2024.pdf';  // Provide the correct path to your CV PDF file
import 'academicons/css/academicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center my-5"}>
                <a href="mailto:rsalati@rice.edu" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fas fa-envelope huge-icon" style={{ fontSize: '45px', marginInline: '3px' }} ></i>
                </a>
                <a href="https://github.com/RobSalati" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-github big-icon" style={{ fontSize: '45px', marginInline: '3px' }} ></i>
                </a>
                <a href="https://www.linkedin.com/in/robert-salati-bab745301/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-linkedin huge-icon" style={{ fontSize: '45px', marginInline: '3px' }} ></i>
                </a>
                <a href="https://scholar.google.com/citations?user=3u8u_dwAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-google-scholar huge-icon" style={{ fontSize: '45px', marginInline: '3px' }} ></i>
                    {/*<img src={GoogleScholarLogo} alt="GoogleScholar logo" className="footer-logo mx-2 clickable"></img>*/}
                </a>
            </div>
        </div>
    )
}

export default Footer;