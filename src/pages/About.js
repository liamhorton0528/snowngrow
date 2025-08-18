import {Link, useNavigate} from 'react-router-dom';

export default function About() {
    return (
        <div>
            <Family />
            <Team />
            <Careers />
        </div>
    );
}

function Family() {
    return (
        <div className="family_container">
            <div className="family_div">
                <div className='family_content'>
                    
                <h1 className="family_item">Our Family Business</h1>
                <p className="family_text family_item">Snow N’ Grow is proudly Family run business, lifelong Ottawa residents with a strong work ethic and a passion for serving their community. With years of hands-on experience and a commitment to quality, we deliver friendly, reliable service built on trust, care, and family values.</p>
                </div>
            </div>
        </div>
    );
}

function Team() {
    return (
        <div className="team_container">
            <div className="team_div">
                <h1>Our Team</h1>
                <div className="members">
                    <Team_Member name={'Pat Secours'} title={'Owner'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"block"} summer={"block"} />
                    <Team_Member name={'Rachel Secours'} title={'Admin Manager'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"block"} summer={"block"} />
                    <Team_Member name={'Matthew Secours'} title={'Manager'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"block"} summer={"block"} />
                    <Team_Member name={'Carter Secours'} title={'Landscaper'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"none"} summer={"block"} />
                    <Team_Member name={'Gilles Secours'} title={'Team Member'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"block"} summer={"block"} />
                    <Team_Member name={'Caleb Merkley'} title={'Team Member'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"block"} summer={"block"} />
                    <Team_Member name={'Logan Merkley'} title={'Team Member'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"block"} summer={"block"} />
                    <Team_Member name={'Ian Gray'} title={'Team Member'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"block"} summer={"block"} />
                    <Team_Member name={'Theo Avila'} title={'Team Member'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} winter={"block"} summer={"block"} />
                </div>
            </div>
        </div>
    );
}

    function Team_Member(props) {
        return (
            <div className="team_member_container">
                <div className="team_member">
                    <div className="team_name_title">
                        <div className="member_name"><b>{props.name}</b></div>
                        <div className="member_title">{props.title}</div>
                    </div>
                    {/* <div className="team_seasons">
                        <div className="winter" style={{display: props.winter}}><img src="./static/winter.png" className="season_icon" /></div>
                        <div className="summer" style={{display: props.summer}}><img src="./static/summer.png" className="season_icon" /></div>
                    </div> */}
                </div>
                <br/>
                <div className="team_seasons">
                        <div className="winter" style={{display: props.winter}}><img src="./static/winter.png" className="season_icon" /></div>
                        <div className="summer" style={{display: props.summer}}><img src="./static/summer.png" className="season_icon" /></div>
                    </div>
            </div>
        );
    }

function Careers() {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/", { state: { scrollTo: "contact_form" } });
    };
    return (
        <div className="careers_container">
            <h3>Careers</h3>
            <p>While we are not currently hiring, we are always accepting resumes. Contact us if you’re interested in working with us. We would love to meet with you.</p>
            <button className="button_green" onClick={goToContact}>Email Us</button>
        </div>
    );
}