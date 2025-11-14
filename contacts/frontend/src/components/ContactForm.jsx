export default function ContactForm({
  name,
  email,
  phone,
  address,
  image,
  handleOnSubmit,
  handleOnChange,
  isEditing,
}) {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleOnChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleOnChange}
            required
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleOnChange}
            required
            placeholder="Enter address"
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={handleOnChange}
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit">{isEditing ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}
