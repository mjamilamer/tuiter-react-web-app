import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom"
import {Routes, Route} from "react-router"
import mongoose from "mongoose"

mongoose.connect('mongodb://127.0.01:27017/tuiter');

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Labs/>}/>
                <Route path="/hello" element={<HelloWorld/>}/>
                <Route path="/tuiter/*" element={<Tuiter/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;