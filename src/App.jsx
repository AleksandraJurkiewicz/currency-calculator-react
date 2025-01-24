import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Rate from "./Rate";
import Result from "./Result";

function App() {
  return (
    <>
      <Container>
        <Header title="Kalkulator walut" />
        <Form />
        <Rate />
        <Result />
      </Container>
    </>
  )
}

export default App
