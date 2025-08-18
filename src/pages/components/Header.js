import PageLink from "./PageLink";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/", { state: { scrollTo: "contact_form" } });
    };

    return (
        <div className='header_container'>
            <div className='header'>
                <div className="header_content">
                    <div className="links header_item">
                    <PageLink url={"/"} text={"Home"} />
                    <PageLink url={"/About"} text={"About Us"} />
                    {/* <PageLink url={"#"} text={"Services"} /> */}
                    </div>

                    <div className="header_item logo_container">
                    <Link to="/">
                        <img className="logo header_item" alt="Snow'N'Grow" src="./static/snowngrow_logo.png" />
                    </Link>
                    </div>

                    <a className="header_item contact_link"><button onClick={goToContact} className="button_green">Contact Us</button></a>
                </div>
            </div>
            {/* <hr/> */}
        </div>
    );
}

