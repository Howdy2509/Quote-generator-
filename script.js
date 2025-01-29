// Array of quotes
const quotes = [
    { text: "Its like using a JCB to crack a nut", author: "Me Old Granny" },
    { text: "We have always been outside of the tent", author: "Me Old Granny" },
    { text: "We havent got the plates to give you to juggle", author: "Me Old Granny" },
    { text: "I would rather be pissed off than pissed on", author: "Me Old Granny" },
    { text: "Squeaky wheel gets the oil", author: "Me Old Granny" },
    { text: "Its like comparing apples and various different fruits", author: "Me Old Granny" },
    { text: "One stone two birds", author: "Me Old Granny" },
    { text: "we will eat the elephant in small bites", author: "Me Old Granny" },
    { text: "Auto-pilot will be the death of us", author: "Me Old Granny" },
    { text: "Until the last person leaves we cant close the pub", author: "Me Old Granny" },
    { text: "Im like rich chocolate you can only have a little bit of me", author: "Me Old Granny" },
    { text: "Yes, yes, yes, yes", author: "Me Old Granny" },
    { text: "If you rob an orchard you are an apple bandit", author: "Me Old Granny" },
    { text: "Its a bag of apples compared to one orange", author: "Me Old Granny" },
    { text: "All I care about is what time it is, not how the clock works", author: "Me Old Granny" },
    { text: "If in doubt keep it simple", author: "Me Old Granny" },
    { text: "Only way to learn how to ride a bike is to get on and start peddling ", author: "Me Old Granny" },
    { text: "No body leaves baby in the corner", author: "Me Old Granny" },
    { text: "Work on building a house instead of fighting a fire", author: "Me Old Granny" },
    { text: "Ask the question twice if you're not happy with the first answer", author: "Me Old Granny" },
    { text: "A dollar short and a fuckin day late", author: "Me Old Granny" },
    { text: "You dont throw someone 3 tennis balls and think they will catch one of them", author: "Me Old Granny" },
    { text: "Hes a rat in a corner", author: "Me Old Granny" },
    { text: "We are putting two different ingredients from two dishes into the same pot", author: "Me Old Granny" },
    { text: "Get the scores on the fucking doors", author: "Me Old Granny" },
    { text: "Nobody is screaming for that", author: "Me Old Granny" },
    { text: "The Toothpaste is out of the tube and I cant get it back in", author: "Me Old Granny" },
    { text: "Our agility is our advantage, not our disadvantage", author: "Me Old Granny" },
    { text: "People click their fingers and expect you to dance but I dont dance if theres no music", author: "Me Old Granny" },
    { text: "Hang around the barber shop long enough and you will get a haircut", author: "Me Old Granny" },
    { text: "Its like playing tennis against a curtain", author: "Me Old Granny" },
    { text: "The map is key", author: "Me Old Granny" },
];

// Select DOM elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const quoteNumberElement = document.getElementById("quote-number");
const button = document.getElementById("generate-quote");

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Temporarily hide the content for fade-out
  quoteElement.style.opacity = 0;
  authorElement.style.opacity = 0;
  quoteNumberElement.style.opacity = 0;

  // Wait for the fade-out to complete, then update the content
  setTimeout(() => {
    quoteNumberElement.textContent = `${randomIndex + 1}`;
    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.author}`;

    // Fade in the new content
    quoteElement.style.opacity = 1;
    authorElement.style.opacity = 1;
    quoteNumberElement.style.opacity = 1;
  }, 300); // Matches the CSS transition duration
}

//Add event listener to the button
button.addEventListener("click", generateRandomQuote);

// Select elements
const copyIcon = document.getElementById("copy-icon");
const tooltip = document.getElementById("copy-tooltip");
const quoteText = document.getElementById("quote");

// Function to copy text to clipboard and show tooltip
function copyToClipboard() {
    const textToCopy = quoteText.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        // Show tooltip
        console.log("Text copied to clipboard:", textToCopy);
        tooltip.classList.add("show");

        // Hide tooltip after 2 seconds
        setTimeout(() => {
            tooltip.classList.remove("show");
            console.log("Tooltip hidden");  
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

// Add event listener to copy icon
copyIcon.addEventListener("click", copyToClipboard);
