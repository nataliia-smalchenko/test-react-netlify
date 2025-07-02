import { useState } from "react";
import { config } from "./utils/config";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Please, click the button");

  return (
    <>
      <div>
        <h1>Hello, world!</h1>
        <button
          onClick={async () => {
            try {
              const response = await fetch(config.apiUrl);
              const data = await response.json();
              setMessage(data[0].message);
            } catch (error) {
              console.log(error);
              setMessage("Error connection to API");
            }
          }}
        >
          Click
        </button>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
