import React from "react";

import "./styles.css";
import Task from "./Task";

type Props = {
  count: number;
  list: number[];
};

const ListView = ({ count, list }: Props) => {
  return (
    <section className='numbers-list'>
      <h3>Lista de números:</h3>

      {count % 2 !== 0 && (
        <ul>
          {list.map((number) => (
            <Task listNumber={number} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ListView;
