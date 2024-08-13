const ReUseableForm = ({
  formTitle,
  handleSubmit,
  submitBtnText = "Submit",
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="email" placeholder="Email" name="email" id="" />
        <br />
        <input type="password" placeholder="Password" name="password" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReUseableForm;
