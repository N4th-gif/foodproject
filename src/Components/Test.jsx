import { useState } from "react";

function Test() {
  const [text, setText] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    if (text > 0) {
      setText(text - 1);
    } else {
      setText(text);
    }
  };
  return (
    <div>
      <h1>{text}</h1>
      <button type="button" onClick={() => setText(text + 1)}>
        Increase
      </button>
      <button type="button" onClick={handleClick} >
        Decrease
      </button>

      <h1>{name}</h1>
      <button type="button" onClick={() => setName("Clicked !!!")}>
        Click
      </button>
    </div>
  );
}

export default Test;

