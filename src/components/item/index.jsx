import { useState, useEffect } from "react";

import { Container } from "./style";
import { Button } from "../button";

export function Item({ img, title, id }) {
  const [unity, setUnity] = useState(0);

  function onClickPlus() {
    setUnity(unity + 1);
  }

  function onClickDecrement() {
    if (unity > 0) setUnity(unity - 1);
  }

  return (
    <Container>
      <img src={img} />
      <span>{title}</span>

      <div>
        <Button title="-" id="decrement" onClick={onClickDecrement}></Button>
        <span>{unity}</span>
        <Button title="+" id="plus" onClick={onClickPlus}></Button>
      </div>
    </Container>
  );
}
