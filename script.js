function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill = "black";
    document.getElementById('codesandbox').style.fill = "black";
    document.getElementById('codepen').style.fill = "black";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill = "white";
    document.getElementById('codesandbox').style.fill = "white";
    document.getElementById('codepen').style.fill = "white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById('github').style.fill = "black";
    document.getElementById('codesandbox').style.fill = "black";
    document.getElemsentById('codepen').style.fill = "black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill = "white";
    document.getElementById('codesandbox').style.fill = "black";
    document.getElementById('codepen').style.fill = "white";
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
    projectName: "Simple Calculator",
    projectDescription:
      "Designed & Built a simple calculator to perform daily operations.",
    projectImage: "images/switch.jpg",
    codeLink: "https://github.com/Omkar-Ghate/Simple-Calculator",
    demoLink: "https://boring-yet-simple-calculator.netlify.app/"
  },
  
  {
    projectName: "Impossible Button",
    projectDescription:
      "Designed & Built Impossible Button Game using HTML and JavaScript.",
    projectImage: "images/impossible button.jpg",
    codeLink: "https://github.com/Omkar-Ghate/impossible-button",
    demoLink: "http://impossible-button.vercel.app/"
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

