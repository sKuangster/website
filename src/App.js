import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './routes/dashboard';
import Application from "./routes/applications";
import HomePage from './routes/home';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/applications" element={<Application />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;