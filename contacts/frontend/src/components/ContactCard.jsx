export default function ContactCard({
  _id,
  name,
  contact,
  image,
  handleOnDelete,
  handleEditClick,
}) {
  return (
    <div>
      <h3>{name}</h3>
      {image ? <img src={image} alt={name} width={"100px"} /> : null}

      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.address}</p>
      <div>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => handleOnDelete(_id)}
        >
          Delete
        </button>
        <button onClick={() => handleEditClick({ _id, name, contact, image })}>
          Edit
        </button>
      </div>
    </div>
  );
}
