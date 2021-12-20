import {Link} from 'react-router-dom';
const ContactList = (props) => {
    const contacts = props.contacts;
    const title = props.title;
    return ( 
        <div className="blog-list">
        <h2>{title}</h2>
            {contacts.map((contact) => (
                <div className="blog-preview" key={contact.id}>
                <Link to={`/contactdetails/${blog.id}`}>
                        <h2> {contact.name}</h2>
                        <p>Номер за Връзка: {contact.email} </p>
                        <p>Имейл: {contact.email} </p>
                </Link>
                </div>

            ))}
        </div>
     );
}
 
export default ContactList;