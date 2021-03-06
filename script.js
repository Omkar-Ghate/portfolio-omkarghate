function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
  themeDots[theme].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

class Project {
  constructor({
    projectName,
    projectDescription,
    projectImage,
    codeLink,
    demoLink
  }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "mUsIk: Component Library",
    projectDescription:
      "mUsIk is an open source styling framework, which helps Developers to use best styles and components, by using pre-defined classnames. It helps you to quickly build your Dream Project, by focusing more on Functionality, because we take care of your Designs.",
    projectImage: "./images/musik-cl.jpg",
    codeLink: "https://github.com/Omkar-Ghate/musik",
    demoLink: "https://musik-cl.netlify.app/"
  },
  {
    projectName: "Taxi Management System",
    projectDescription:
      "Includes trip booking,fare-calculation, bill-generation, user & driver registration. Supports CRUD:Create, Read, Update & Delete operations on user,driver & taxi-owner. Tech-stack:JavaScript, NodeJS, MySQLDatabaseServer, HTML5,CSS3, BootStrap",
    projectImage: "./images/TMS.jpg",
    codeLink: "https://github.com/Omkar-Ghate/Taxi-Management-System",
    demoLink: "https://github.com/Omkar-Ghate/Taxi-Management-System"
  },
  {
    projectName: "Stock Profit and Loss Calculator",
    projectDescription:
      "This app shows how much profit or loss we are having on our stocks. If user has gained more than 50%, it makes the theme of app happy(blue) and if user has lost more than 50%, it makes the theme of app sad(red).",
    projectImage: "./images/stockProfitLoss.jpg",
    codeLink: "https://github.com/Omkar-Ghate/stock-profit-or-loss",
    demoLink: "https://cbh6i.csb.app/"
  },
  {
    projectName: "Birthday Palindrome",
    projectDescription:
      "This is a fun app to check if the birthdate is a palindrome or not. Built using HTML5, CSS3, JavaScript, and ReactJS.",
    projectImage: "./images/birthdayPalindrome.jpg",
    codeLink: "https://github.com/Omkar-Ghate/birthday-palindrome",
    demoLink: "https://qbnne.csb.app/"
  },
  {
    projectName: "Fun With Triangles",
    projectDescription:
      "Built using HTML5, CSS3, JavaScript and ReactJS, this is a fun app to learn about triangles and it's interesting properties through quiz and exercises.",
    projectImage: "./images/funWithTriangles.jpg",
    codeLink: "https://github.com/Omkar-Ghate/fun-with-triangles",
    demoLink: "https://xicxx.csb.app/"
  },
  {
    projectName: "Is your Birthday Lucky?",
    projectDescription:
      "This fun app checks if sum of the digits of your birthday is divisible by the lucky number. Built using HTML, CSS, JS, and ReactJS",
    projectImage: "./images/luckyBirthday.jpg",
    codeLink: "https://github.com/Omkar-Ghate/is-your-birthday-lucky",
    demoLink: "https://4qmvh.csb.app/"
  },
  {
    projectName: "German Accent Translator",
    projectDescription:
      "Built using HTML5, CSS3, and Javascript, this app helps you sound more authentically German.",
    projectImage: "./images/germanAccent.jpg",
    codeLink: "https://github.com/Omkar-Ghate/german-translator-neog",
    demoLink: "https://german-accent-translator.netlify.app/"
  },
  {
    projectName: "Book Recommendation App",
    projectDescription:
      "Built using HTML5, CSS3, JavaScript and ReactJS, this is a book recommendation app covering books from various genres.",
    projectImage: "images/bookApp.jpg",
    codeLink: "https://github.com/Omkar-Ghate/my-book-recommendation-app",
    demoLink: "https://1v93o.csb.app/"
  },
  {
    projectName: "Cash Register Manager",
    projectDescription:
      "Shows how many notes of currency 1,5,10,20,100,500,2000 to return to the customer by taking bill amount and cash given. Built using HTML5, CSS3, and JavaScript.",
    projectImage: "images/cashRegister.jpg",
    codeLink: "https://github.com/Omkar-Ghate/cash-register-manager",
    demoLink: "https://cashregister-omkarghate.netlify.app/"
  },
  {
    projectName: "Portfolio with Theme Changer",
    projectDescription:
      "Designed & Built the Portfolio using HTML CSS and Vanilla JavaScript to show case the Professional Journey.",
    projectImage: "images/portfolioWebsite.jpg",
    codeLink: "https://omkarghate-portfolio.netlify.app/",
    demoLink: "https://omkarghate-portfolio.netlify.app/"
  },

  {
    projectName: "Emoji Interpretor",
    projectDescription:
      "Built using HTML, CSS, JavaScript and ReactJS, this app tells you the name of your emoji!",
    projectImage: "images/emoji.jpg",
    codeLink: "https://github.com/Omkar-Ghate/emoji-interpretor-neog",
    demoLink: "https://whats-your-emoji.netlify.app/"
  },

  {
    projectName: "Banana Speak",
    projectDescription:
      "Translation app to convert English to the language of minions,BANANA. Created using HTML,CSS,Javascript,and minion translator API.",
    projectImage: "images/bananaSpeak.jpg",
    codeLink: "https://github.com/Omkar-Ghate/banana-speak-neog",
    demoLink: "https://this-speaks-banana.netlify.app/"
  },
  
  
  {
    projectName: "Password Strength Tester",
    projectDescription:
      "Designed & Built the Password Strength Tester using React-Hooks and 'zxcvbn' package.",
    projectImage: "images/password.jpg",
    codeLink: "https://github.com/Omkar-Ghate/password-strength-indicator",
    demoLink: "http://password-strength-indicator.vercel.app/"
  },
  {
    projectName: "Light Dark Switch",
    projectDescription:
      "Designed & Built the Light and Dark Switch using React-Hooks and local storage.",
    projectImage: "images/switch.jpg",
    codeLink: "https://github.com/Omkar-Ghate/dark-light-mode",
    demoLink: "http://dark-light-mode-xi.vercel.app/"
  },

  {
    projectName: "Todo List",
    projectDescription:
      "Simple web application built using HTML,CSS,JavaScript to save Your daily tasks in order not to miss anything.",
    projectImage: "images/todoList.jpg",
    codeLink: "https://github.com/Omkar-Ghate/YourTodoList",
    demoLink: "https://create-your-todo.netlify.app/"
  },

  {
    projectName: "Impossible Button",
    projectDescription:
      "Designed & Built Impossible Button Game using HTML and JavaScript.",
    projectImage: "images/impossible button.jpg",
    codeLink: "https://github.com/Omkar-Ghate/impossible-button",
    demoLink: "http://impossible-button.vercel.app/"
  },
  {
    projectName: "CLI GK Quiz",
    projectDescription:
      "A Command Line Interface(CLI) app built using NodeJS, Javascript, and Chalk Library to check your General Knowledge.",
    projectImage: "images/cliQuiz.jpg",
    codeLink: "https://github.com/Omkar-Ghate/cli-quiz-assignment",
    demoLink: "https://replit.com/@OmkarGhate/cli-quiz-neog?embed=1output=1#index.js"
  },
  {
    projectName: "CLI Quiz App",
    projectDescription:
      "A Command Line Interface(CLI) app built using NodeJS, Javascript, and Chalk Library to check how well you know me!",
    projectImage: "images/cliApp.jpg",
    codeLink: "https://github.com/Omkar-Ghate/cli-quiz",
    demoLink: "https://replit.com/@OmkarGhate/sample?embed=1&output=1#index.js"
  },
  

];

const createCards = () => {
  projects.map(project => {
    const projectCard = new Project({
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      projectImage: project.projectImage,
      codeLink: project.codeLink,
      demoLink: project.demoLink
    }).createProjectCard();
    document.getElementById("post-wrapper-id").appendChild(projectCard);
  }
  );
};
createCards();

