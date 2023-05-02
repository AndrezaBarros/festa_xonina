import { HiOutlineUser, HiOutlineMail } from "react-icons/hi";

import { Container } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function Register() {
  return (
    <Container>
      <header>
        <h1>Quem é tu na fila da pipoca?</h1>
      </header>

      <main>
        <Input placeholder="Name" type="text" icon={HiOutlineUser} />

        <Input placeholder="Email" type="email" icon={HiOutlineMail} />
      </main>

      <footer>
        <Button title="Confirmar"/>
      </footer>
    </Container>
  );
}
