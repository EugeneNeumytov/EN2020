import './Header.css'
import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="title-box">
                <div className="title">
                    <h1>May I introduce myself?</h1>
                </div>
                <div className="front-design">
                    Frontend Design | UI/UX Design
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Header;