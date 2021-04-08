import React from 'react';
import '../index.css';

function QuoteBox ({color, quote, author, chgQuote}) {
	return (
		<div>
	      	<div id="quote-box">
	        <div id="text" style={{color: color}}>{quote}</div>
	        <div id="author" style={{color: color}}>- {author}</div>
	        <div className="bottom">
	          <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">
	            <button className="tweetQuote" style={{backgroundColor: color}}>Tweet</button>
	          </a>
	          <button id="new-quote" style={{backgroundColor: color}} onClick={chgQuote}>New Quote</button>
	        </div>
	      </div>
    	</div>
	);
}

export default QuoteBox;