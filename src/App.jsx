import { Title } from "./styled";
import { Form } from "./Form";
import { Clock } from "./Clock";

function App() {

  return (
    <>
      <div>
        <Clock />
        <Title>
          <h1>Kalkulator walut</h1>
        </Title>
        <Form/>
      </div>
    </>
  )
};

export default App;