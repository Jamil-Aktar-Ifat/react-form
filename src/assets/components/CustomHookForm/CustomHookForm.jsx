import useInputState from "../../../Hooks/useInputState";

const CustomHookForm = () => {
  //   const [name, handleNameChange] = useInputState("jamil");
  const emailState = useInputState("jamil@hotmail.com");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          placeholder="Name"
          name="name"
        /> */}
        <br />
        <input
          {...emailState}
          type="email"
          placeholder="Email"
          name="email"
          id=""
        />
        <br />
        <input type="password" placeholder="Password" name="password" />
        <br />
        <input type="submit" value="Submit " />
      </form>
    </div>
  );
};

export default CustomHookForm;
