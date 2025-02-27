import { useState } from "react";
import { Title } from "./styled";
import { currencies } from "./currencies";
import { Form } from "./Form";
import { Clock } from "./Clock";

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
      <div>
        <Clock />
        <Title>
          <h1>Kalkulator walut</h1>
        </Title>
        <Form
          result={result}
          calculateResult={calculateResult}
        />
      </div>
    </>
  )
};

export default App;