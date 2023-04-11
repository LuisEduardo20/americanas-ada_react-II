import React from "react";

import "./styles.css";

type Props = {
  count: number;
  list: number[];
};

const NumbersList = ({ count, list }: Props) => {
  return (
    <section className='numbers-list'>
      <h3>Lista de números:</h3>

      {count % 2 !== 0 && (
        <ul>
          {list.map((number) => (
            <li>{number}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default NumbersList;
