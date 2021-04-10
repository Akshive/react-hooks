import React, { useImperativeHandle, useState } from "react";

const inputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  const handleChange = (ev) => {
    setHistoryList([...historyList, ev.target.value]);
    setInputText(ev.target.value);
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={handleChange}
        placeholder="enter some text"
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default inputElement;
