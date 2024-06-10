import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const EditContact = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const contactFromLocation = location.state ? location.state.contact : null;
  const [name, setName] = useState(
    contactFromLocation ? contactFromLocation.name : ""
  );
  const [email, setEmail] = useState(
    contactFromLocation ? contactFromLocation.email : ""
  );

  useEffect(() => {
    if (!contactFromLocation) {
      const contact = props.contacts.find((c) => c.id === id);
      if (contact) {
        setName(contact.name);
        setEmail(contact.email);
      }
    }
  }, [contactFromLocation, id, props.contacts]);

  const update = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }

    props.updateContactHandler({ id, name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
