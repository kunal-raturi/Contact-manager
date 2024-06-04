import React from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const navigate = useNavigate();

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const handleAddContact = () => {
    navigate("/add"); 
  };

  return (
    <div className="main" style={{ marginTop: "50px" }}>
      <div className="ui grid">
        <div className="eight wide column">
          <h2 className="ui header">Contact List</h2>
        </div>
        <div className="eight wide column">
          <div className="ui right floated">
            <button className="ui button blue" onClick={handleAddContact}>
              Add Contact
            </button>
          </div>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
