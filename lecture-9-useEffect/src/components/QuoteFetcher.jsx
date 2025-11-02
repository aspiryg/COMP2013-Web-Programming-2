import { useEffect, useState } from "react";
/*
the state is always changing Ing and triggering a new re-render
*/
export default function QuoteFetcher() {
  const url = "https://inspo-quotes-api.herokuapp.com/quotes/random";
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setQuote(data.quote);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  //   fetchQuote();

  return (
    <div>
      Quote Fetcher
      {isLoading && <h2>Loading ....</h2>}
      <p>{quote.text}</p>
      <p>{quote.author}</p>
      <button onClick={fetchQuote}>Get new Quote</button>
    </div>
  );
}
