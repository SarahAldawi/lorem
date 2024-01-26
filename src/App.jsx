import data from "./data";
import { useState } from "react";
import { nanoid } from "nanoid";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h2 className="title">Tired Of Boring Lorem Ipsum?</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          name="paragraphs"
          max={8}
          min={1}
          step={1}
          value={count}
          onChange={handleChange}
        />
        <button className="btn" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="lorem-text">
        {text.map((para) => {
          return <p key={nanoid()}>{para}</p>;
        })}
      </div>
    </section>
  );
};
export default App;
