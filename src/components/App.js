import React, { useState } from "react";
import "../styles/App.css";

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

function App() {
  const [Answer, SetAnswer] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  console.log(input1, input2);

  const clearFields = () => {
    setInput1("");
    setInput2("");
    SetAnswer("");
  };

  const calculateRelation = (e) => {
    e.preventDefault();

    if (
      !input1 ||
      !input2 ||
      typeof input1 !== "string" ||
      typeof input2 !== "string"
    ) {
      SetAnswer("Please Enter valid input");
      return;
    }

    let name1 = input1;
    let name2 = input2;

    for (let char of name1) {
      if (name2.includes(char)) {
        name1 = name1.replace(char, "");
        name2 = name2.replace(char, "");
      }
    }

    setInput1(name1);
    setInput2(name2);
    SetAnswer(arr[(name1.length + name2.length) % 6]);
  };

  return (
    <div id="main">
      <form>
        <input
          type="text"
          data-testid="input1"
          placeholder="Enter first name"
          value={input1}
          onChange={(e) => {
            setInput1(e.target.value);
          }}
        />
        <input
          type="text"
          data-testid="input2"
          placeholder="Enter second name"
          value={input2}
          onChange={(e) => {
            setInput2(e.target.value);
          }}
        />
        <button
          data-testid="calculate_relationship"
          onClick={calculateRelation}
        >
          Calculate Relationship Future
        </button>
        <button type="reset" data-testid="clear" onClick={clearFields}>
          Clear
        </button>
        <h3 data-testid="answer">{Answer}</h3>
      </form>
    </div>
  );
}

export default App;
