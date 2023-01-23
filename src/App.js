import { useEffect, useState } from "react";
import Quote from "./Quote.css";

function App() {
  const [quateinfo, setQuateInfo] = useState({});
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuateInfo({
          text: data.content,
          author: data.author,
        });
      });
  };
  return (
    <div className="app">
      <div id="quote-box">
        <p id="text">{quateinfo.text}</p>
        <p id="author">{quateinfo.author}</p>
        <button id="new-quote" onClick={getQuote}>
          New Quote
        </button>
        <a
          href={"https://twitter.com/intent/tweet?text=" + quateinfo.text}
          id="tweet-quote"
        >
          Post to Twitter
        </a>
      </div>
    </div>
  );
}

export default App;
