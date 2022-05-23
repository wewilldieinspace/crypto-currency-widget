// COMPONENTS
import { Container } from "./styles/App.styles"
import { Title, Text } from "./components"
import { Form } from "./components"

function App() {

  return (
    <Container>
      <Title style={{fontWeight: 300}}>Crypto Exchange</Title>
      <Text>Exchange fast and easy</Text>
      <Form />
    </Container>
  );
}

export default App;
