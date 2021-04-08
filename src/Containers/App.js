import React, {useState} from 'react';
import '../index.css';
import QuoteBox from '../Components/quoteBox.js';
import randomQuote from '../Functions/quotes.js';

const initialState = {
  quote: "",
  author: "",
  color: ""
};

function App() {
  const [state, setState] = useState(initialState);

  function changeQuote(){
    setState(randomQuote());
  }

  if (state.quote === "")
    changeQuote();

  let element = document.getElementById("root");
  element.style.backgroundColor = state.color;
  
  return (
    <QuoteBox
      color={state.color}
      quote={state.quote}
      author={state.author}
      chgQuote={changeQuote}
    />
  );
}

export default App;
