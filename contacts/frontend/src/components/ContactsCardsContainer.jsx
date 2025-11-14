import ContactCard from "./ContactCard";

export default function ContactsCardsContainer({
  contacts,
  handleOnDelete,
  handleEditClick,
}) {
  return (
    <div>
      Contacts Cards Container
      {contacts.map((item) => (
        <ContactCard
          key={item._id}
          {...item}
          handleOnDelete={handleOnDelete}
          handleEditClick={handleEditClick}
        />
      ))}
    </div>
  );
}
