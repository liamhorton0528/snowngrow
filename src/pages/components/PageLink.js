import {Link} from 'react-router-dom';

export default function PageLink(props) {
    return (
        <Link to={props.url} className="header_link">{props.text}</Link>
    );
}