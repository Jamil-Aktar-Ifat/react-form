import "./App.css";
import RefForm from "./assets/components/RefForm/RefForm";
import SimpleForm from "./assets/components/SimpleForm/SimpleForm";
import StatefulForm from "./assets/components/StatefulForm/StatefulForm";

function App() {
  return (
    <>
      <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      <RefForm></RefForm>
    </>
  );
}

export default App;
