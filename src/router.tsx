import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./home";

export default function Page() {
    return (
        <div className="body">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}