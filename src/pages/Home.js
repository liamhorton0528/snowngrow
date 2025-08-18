import {Link} from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const contactRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === "contact_form") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location]);

    return (
        <div className='page_content'>
            <Welcome /> 
            <Services />
            <Reviews />
            {/* <FAQ /> */}
            <Carousel />
            <ContactForm refProp={contactRef} />
        </div>
    );
}

function Welcome() {
    return (
        <div className="welcome_container">
            <div className="welcome_div">
                <h1>Welcome to Snow N' Grow</h1>
                <p>
                    At Snow N’ Grow, we’re proud to be a family-owned and operated business serving the Ottawa community with reliable, all-year-round outdoor care. With deep roots in the area and a passion for helping our neighbours, we specialize in snow removal during the winter and expert landscaping services throughout the warmer seasons.
                    From clearing snow to designing and maintaining beautiful outdoor spaces, we’re committed to quality, safety, and customer satisfaction. Whether it’s a light dusting or a heavy storm, a simple lawn trim or a full garden makeover, Snow N’ Grow is here to help your property look its best—every season of the year.
                </p>
                <Link to="/About"><button className='button_green'>Read More About Us</button></Link>
            </div>
        </div>
    );
}

function Services() {
    return (
        <div className='services_container'>
            <div className="services_div">
                <Service src={"./static/winter-pic.png"} alt={"Snow Removal Image"} title={"About our Snow Removal Services"} text={"When winter hits Ottawa, Snow N’ Grow is ready to keep your property safe and accessible. Our snow removal team works around the clock to clear driveways, walkways, and commercial lots quickly and efficiently. We use professional-grade equipment and monitor weather conditions closely to ensure timely service, no matter how heavy the snowfall. "} />
                <Service src={"./static/summer-house.JPG"} alt={"Landscaping Image"} title={"About our Landscaping Services"} text={"When the snow melts, Snow N’ Grow shifts gears to bring your outdoor spaces to life. Our landscaping services cover everything from lawn care and garden design to seasonal cleanups. Whether you're looking to refresh your backyard, add curb appeal, or maintain a pristine lawn, our experienced team is here to help. "} />
            </div>
        </div>
    );
}

    function Service(props) {
        return (
            <div className="service_item">
                <img src={props.src} alt={props.alt} className='service_img' /><br/><br/>
                {/* <b><span style={{fontSize: 'x-large'}}>{props.title}</span></b> */}
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        );
    }

function Reviews() {
    return (
        <div className='reviews_container'>
            <h2>Customer Reviews</h2>
            <small>Don't trust us? Here are some reviews from previous customers!</small><br/><br/>
            <div className="reviews_div">
                <Review name={"Name"} text={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'} />
                <Review name={"Name"} text={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'} />
                <Review name={"Name"} text={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'} />
            </div>
        </div>
    );
}

    function Review(props) {
        return (
            <div className="review_item">
                <b>{props.name}</b><br/>
                <small><i>Satisfied Customer</i></small><br/>
                <p>★★★★★</p>
                <span>{props.text}</span>
            </div>
        );
    }

function FAQ() {
    return (
        <div className='faq_container'>
            <h2>FAQs</h2>
            <div className="faq_div">
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</small><br/><br/>
                <div className='faq_list'>
                    <FAQ_Item q={"Question text goes here"} a={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."} />
                    <FAQ_Item q={"Question text goes here"} a={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."} />
                    <FAQ_Item q={"Question text goes here"} a={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."} />
                    <FAQ_Item q={"Question text goes here"} a={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."} />
                </div>
            </div>
        </div>
    );
}

    function FAQ_Item({q, a}) {
        const [isOpen, setIsOpen] = useState(false);

        const toggleAnswer = () => {
            setIsOpen((prev) => !prev);
        };

        return (
            <div className="faq_item">
            <div className="faq_question" onClick={toggleAnswer}>
                <h5>{q}</h5>
                <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            <div className={`faq_answer ${isOpen ? 'open' : ''}`}>
                <p>{a}</p>
            </div>
            </div>
        );
    }

function ContactForm({refProp}) {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.ok) {
        setStatus("Message sent!");
        } else {
        setStatus("Error: " + data.message + `\nIt looks like our email service is having some issues, feel free to email us at snow.n.grow@gmail.com in the meantime.`);
        }
    };

    return (
        <div className='contact_container' id='contact_container'>
            <div className="contact_form"  ref={refProp}>
                <h2>Contact Us</h2>
                <small>Like what you see? Send us an email and we will be in touch.</small><br/>
                <form onSubmit={handleSubmit}>
                    <label>Name <span style={{color: 'red'}}>*</span></label><br/>
                    <input type="text" name='name' onChange={handleChange} required /><br/>
                    <label>Email <span style={{color: 'red'}}>*</span></label><br/>
                    <input type='email' name='email' onChange={handleChange} required /><br/>
                    <label>Message <span style={{color: 'red'}}>*</span></label><br/>
                    <textarea placeholder='Type your message...' name='message' onChange={handleChange} required /><br/><br/>
                    <div className='center_form_content'>
                        <input type='checkbox' id='terms' name='terms' required />
                        <label for="terms">&nbsp;I accept the <a href='#'>Terms</a> <span style={{color: 'red'}}>*</span></label>
                        <br/><br/><button className='button_blue' type='submit'>Submit</button>
                    </div>
                    <p>{status}</p>
                </form>
            </div>
        </div>
    );
}

function Carousel() {
    return (
        <div className='carousel_container'>
            <div className='carousel_div'>
                <h2>Past Projects</h2>
                <small>Here are a few examples of some previous projects of ours.</small><br/><br/>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        {/* <li data-target="#carouselExampleIndicators" data-slide-to="5"></li> */}
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100 c-image" src="./static/carousel/img-1.JPG" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 c-image" src="./static/carousel/img-2.png" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 c-image" src="./static/carousel/img-3.png" alt="Third slide" />
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 c-image" src="./static/carousel/img-4.JPG" alt="Fourth slide" />
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 c-image" src="./static/carousel/img-5.png" alt="Fifth slide" />
                        </div>
                        {/* <div class="carousel-item">
                        <img class="d-block w-100" src="./static/carousel/img-6.png" alt="Sixth slide" />
                        </div> */}
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}