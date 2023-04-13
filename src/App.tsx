import React, { useState } from "react";

import { Button } from "./components";
import NumbersList from "./components/ListView";

import "./styles/app.css";

function App() {
  const [count, setCount] = useState(0);
  const [numbersArray, setNumbersArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20,
  ]);

  const handleAddCount = () => setCount(count + 1);

  return (
    <div className='app'>
      <section>
        <p>Contador: </p>
        <h4>{count}</h4>
        <Button title='Incrementar contador' event={handleAddCount} />
      </section>

      <NumbersList list={numbersArray} count={count} />
    </div>
  );
}

export default App;
