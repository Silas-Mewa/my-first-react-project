import { BaseSyntheticEvent, useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import MyButton from "./components/MyButton";
import UserInput from "./components/UserInput";
import ApiStuff from "./components/APIStuff";

const items = ["Silas", "Sebastian", "Markus"];

const handleSelectItem = (item: string) => {
  console.log("Selected item: " + item);
};

function App() {
  const [showAlert, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* {showAlert && (
          <Alert onPressedClose={() => setAlertVisibility(false)}>
            MyAlert
          </Alert>
        )} */}
      {/* <MyButton onButtonPressed={() => setAlertVisibility(!showAlert)}>
          Toggle alert!
        </MyButton> */}
      {/* <ListGroup
          items={items}
          heading="Names"
          onSelectItem={handleSelectItem}
        /> */}
      {/* <UserInput></UserInput> */}
      <ApiStuff></ApiStuff>
    </div>
  );
}

export default App;
