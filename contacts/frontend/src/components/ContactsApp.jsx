import { useState, useEffect } from "react";
import axios from "axios";
import ContactsCardsContainer from "./ContactsCardsContainer";
import ContactForm from "./ContactForm";

export default function ContactsApp() {
  // State
  const [contactsData, setContactsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });

  const BaseURL = "http://localhost:3000/contacts";

  console.log("Re-render triggered"); // For debugging re-renders

  // Effect
  useEffect(() => {
    fetchContacts();
  }, []);

  // Handlers
  // get all contacts
  const fetchContacts = async () => {
    try {
      const response = await axios.get(BaseURL);
      setContactsData(response.data.reverse()); // The reverse method just to show the newly added contact on the top
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      image: "",
    });
  };

  // add/edit contact
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        /*
        I tried to figure out why updating the UI was not working as it should after re-fetching the contacts list
        in the code you were working on. I don't actaully have the code from the lecture, so I guess it's something related
        the asynchronous implementation of the handlers in lecture code. I believe the implementation contained a mixture of
        async/await and .then() which might have caused some unexpected behavior.
        Because here we are using async/await consistently, the UI updates correctly after re-fetching the contacts list. 
        */
        await handleOnUpdate(formData._id);
        setIsEditing(false);
        // Refresh contacts list after update
      } else {
        await handleOnAdd();
      }
      // Refresh contacts list after adding new contact
      fetchContacts();
      handleResetForm();
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // delete contact
  const handleOnDelete = async (id) => {
    try {
      const response = await axios.delete(`${BaseURL}/${id}`);
      console.log("Contact deleted:", response.data);
      // Refresh contacts list
      fetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (contact) => {
    setFormData({
      _id: contact._id,
      name: contact.name,
      email: contact.contact.email,
      phone: contact.contact.phone,
      address: contact.contact.address,
      image: contact.image,
    });
    setIsEditing(true);
  };

  const handleOnAdd = async () => {
    await axios.post(`${BaseURL}`, formData);
    console.log("Contact added");
    setIsEditing(false);
  };

  const handleOnUpdate = async (id) => {
    try {
      const response = await axios.patch(`${BaseURL}/${id}`, formData);
      console.log("Contact updated:", response.data);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  // Render
  return (
    <div>
      Contacts App
      <ContactForm
        {...formData}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        isEditing={isEditing}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ContactsCardsContainer
          contacts={contactsData}
          handleOnDelete={handleOnDelete}
          handleEditClick={handleEditClick}
        />
      )}
    </div>
  );
}
