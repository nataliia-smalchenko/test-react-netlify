import { useState } from "react";
import { config } from "./utils/config";
import "./App.css";

interface ApiResponse {
  message: string;
}

async function fetchMessage(
  apiUrl: string,
  setMessage: (msg: string) => void
): Promise<void> {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: ApiResponse[] = await response.json();
    setMessage(data[0]?.message ?? "No message received");
  } catch (error) {
    console.error(error);
    setMessage("Error connecting to API");
  }
}

function App() {
  const [message, setMessage] = useState<string>("Please, click the button");

  return (
    <main className="app">
      <h1>Hello, world!</h1>
      <button onClick={() => fetchMessage(config.apiUrl, setMessage)}>
        Click
      </button>
      <p>{message}</p>
    </main>
  );
}

export default App;
