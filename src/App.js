//import logo from './logo.svg';
import Star from "./components/star"
import React from 'react'

function App() {
  const [contact, setContact] = React.useState({
    firstName: "Rahul",
    lastName: "Pandey",
    phone: "+91 9113388165",
    email: "rahul120901@gmail.com",
    isFavorite: true
})

function toggleFavorite() {
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))
}

return (
    <main>
        <article className="card">
            <img src={require("./images/user.png")} className="card--image" alt="user" />
            <div className="card--info">
                <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
    </main>
);
}

export default App;
