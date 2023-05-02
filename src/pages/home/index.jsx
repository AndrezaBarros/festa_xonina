import { Container } from "./style";
import { Button } from "../../components/button";
import { Item } from "../../components/item";

export function Home() {
  return (
    <Container>
      <main>
        <h1>Festa Xonina</h1>
        <span>17 de junho</span>
      </main>


      <div>
        <Button title="Confirmar Presença" />
      </div>
    </Container>
  );
}
