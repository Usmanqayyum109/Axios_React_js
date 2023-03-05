import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    // alert("hi");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
      console.log(res.data.name);
      setName(res.data.name);
      setId(res.data.id);
      setHeight(res.data.height);
    }
    getData();
  });
  return (
    <div>
      <h1>
        {name} {id} {height}
      </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
