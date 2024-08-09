import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer!");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };
  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeName}
          type="text"
          placeholder="Name"
          name="name"
        />
        <br />
        <input
          onChange={handleChangeEmail}
          type="email"
          placeholder="Email"
          name="email"
          id=""
          required
        />
        <br />
        <input
          onChange={handleChangePassword}
          type="password"
          placeholder="Password"
          name="phone"
        />
        <br />
        <input type="submit" value="Submit " />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
