import "./App.css";
import CustomHookForm from "./assets/components/CustomHookForm/CustomHookForm";
import RefForm from "./assets/components/RefForm/RefForm";
import ReUseableForm from "./assets/components/ReUseableForm/ReUseableForm";
import SimpleForm from "./assets/components/SimpleForm/SimpleForm";
import StatefulForm from "./assets/components/StatefulForm/StatefulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up data", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("update profile data", data);
  };

  return (
    <>
      <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ReUseableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up Now</h2>
          <p>Please Sign Up</p>
        </div>
      </ReUseableForm>
      <ReUseableForm
        formTitle={"My Profile"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReUseableForm>
    </>
  );
}

export default App;
