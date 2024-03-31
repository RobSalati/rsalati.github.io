import './App.css';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./MainContent/Home/Home";
import Experience from "./MainContent/Experience/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import RCNL from "./MainContent/Experience/rcnl/rcnl";
import Agilent from "./MainContent/Experience/Agilent/Agilent";
import DelawareTA from "./MainContent/Experience/DelawareTA/DelawareTA";
import DelawareDegree from "./MainContent/Experience/DelawareDegree/DelawareDegree";
import RicePhD from "./MainContent/Experience/RicePhD/RicePhD";
import HorcLab from "./MainContent/Experience/HorcLab/HorcLab";
import AnkleProsthesis from './MainContent/Projects/AnkleProsthesis/AnkleProsthesis';
import HTO from "./MainContent/Projects/HTO/HTO";
import Mechatronics from "./MainContent/Projects/Mechatronics/Mechatronics";
import SeniorDesign from "./MainContent/Projects/SeniorDesign/SeniorDesign";
import Layout from "./Layout";
import Publications from "./MainContent/Publications/Publications";
import Projects from "./MainContent/Projects/Projects";
import Hobbies from "./MainContent/Hobbies/Hobbies";
import Coffee from "./MainContent/Hobbies/Coffee/Coffee";
import Sports from "./MainContent/Hobbies/Sports/Sports";
import Squirrels from "./MainContent/Hobbies/Squirrels/Squirrels";
import Plants from "./MainContent/Hobbies/Plants/Plants";


function App() {
    return (
        <>
            <HashRouter>
                <div className="site-container">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/experience/rcnl" element={<RCNL />} />
                            <Route path="/experience/agilent" element={<Agilent />} />
                            <Route path="/experience/delaware-ta" element={<DelawareTA />} />
                            <Route path="/experience/delaware-degree" element={<DelawareDegree />} />
                            <Route path="/experience/rice-phd" element={<RicePhD />} />
                            <Route path="/experience/horc-lab" element={<HorcLab />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/projects/hto" element={<HTO />} />
                            <Route path="/projects/ankle-prosthesis" element={<AnkleProsthesis />} />
                            <Route path="/projects/mechatronics" element={<Mechatronics />} />
                            <Route path="/projects/senior-design" element={<SeniorDesign />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/hobbies/coffee" element={<Coffee />} />
                            <Route path="/hobbies/sports" element={<Sports />} />
                            <Route path="/hobbies/squirrels" element={<Squirrels />} />
                            <Route path="/hobbies/plants" element={<Plants />} />
                            <Route path="/publications" element={<Publications />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Layout>
                </div>
            </HashRouter>

        </>
    );
}

export default App;
