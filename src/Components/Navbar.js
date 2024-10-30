import { Link } from 'react-router-dom';

export default function Navbar()
{
    return (
        <nav className= "bg-gray-800 text-white py-3 px-4 flex items-center justify-between" >
            <a className= "font-bold text-xl tracking-tight" href = "#" > My Site < /a>
            <div className="flex items-center">
                <Link to="/" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">Home</Link>
                <Link to="/dashboard" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">Dashboard</Link>
                <Link to="/applications" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">Applications</Link>
            </div>
        </nav>
    );
}