const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Yeahhhhhhhhhhh! See you in two days!!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
  const dateIdeas = [
    "Go to chai wala.",
    "Have dinner at dawat",
    "Have a long walk",
    "Stargaze on the putney bridge",
    "Go on a bike ride together",

    // Add more date ideas as needed
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
 letsGoBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * dateIdeas.length);
  const selectedDateIdea = dateIdeas[randomIndex];

  // Create or update a paragraph to show the idea
  let ideaText = document.getElementById("date-idea-text");
  if (!ideaText) {
    ideaText = document.createElement("p");
    ideaText.id = "date-idea-text";
    ideaText.style.marginTop = "20px";
    ideaText.style.fontSize = "20px";
    ideaText.style.color = "#333";
    document.body.appendChild(ideaText);
  }

  ideaText.textContent = `How about this romantic date idea: ${selectedDateIdea}`;
});
  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
