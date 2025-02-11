import { useState } from "react";
import "./App.css";
import { currencies } from "./currencies";
import { Form } from "./Form";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ name }) => name === currency)
      .rate;

    setResult({
      targetAmount: amount * rate,
    });
  }

  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Kalkulator walut</h1>
        </header>
        <Form
          result={result}
          calculateResult={calculateResult}
        />
      </div>
    </>
  )
};

export default App;