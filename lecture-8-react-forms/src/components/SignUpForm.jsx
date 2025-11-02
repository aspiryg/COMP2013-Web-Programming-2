import { useState } from "react";
/*
the value should be controlled by the state so the app re render each time we type
 */
export default function SignUpForm() {
  // State and initialState
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted\nUsername: ${user.username}\nPassword: ${user.password}\nEmail: ${user.email}`
    );
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Passowrd: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
