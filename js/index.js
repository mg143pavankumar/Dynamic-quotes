const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQuotes = document.getElementById('newQuotes');
const tweetme = document.getElementById('tweetme');

let realData = "";
let quotesData = "";


// To add quotes into the tweeter 
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 10); // to get a random number 
    //console.log(realData[rnum].author);
    quotesData = realData[rnum];
    quotes.innerHTML = `${quotesData.text}`;

    quotesData == null ? author.innerText = "unKnown" :
        author.innerText = `-- ${quotesData.author}`;
};


const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();

        //To get random new quotes
        getNewQuotes();
        //console.log(realData[0].text);
        //console.log(realData.length);
    } catch (error) {
        console.log(error);
    }

};

newQuotes.addEventListener("click", getNewQuotes);
tweetme.addEventListener('click', tweetNow);
getQuotes();

