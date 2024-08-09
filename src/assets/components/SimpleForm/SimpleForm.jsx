const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log("form submitted!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="email" placeholder="Email" name="email" id="" />
        <br />
        <input type="text" placeholder="Phone" name="phone" />
        <br />
        <input type="submit" value="Submit " />
      </form>
    </div>
  );
};

export default SimpleForm;
