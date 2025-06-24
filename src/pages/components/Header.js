import PageLink from "./PageLink";
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className='header_container'>
            <div className='header'>
                <div className="header_content">
                    <div className="links header_item">
                    <PageLink url={"/About"} text={"About Us"} />
                    <PageLink url={"#"} text={"Services"} />
                    </div>

                    <div className="header_item logo_container">
                    <Link to="/">
                        <img className="logo" alt="Snow'N'Grow" src="./static/snowngrow_logo.png" />
                    </Link>
                    </div>

                    <div className="contact_link header_item">
                    <Link to="#"><button>Contact Us</button></Link>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

