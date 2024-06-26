document.getElementById("terminal").focus();
var input = document.getElementById("terminal");
document.querySelector("body").addEventListener("click", () => {
  document.getElementById("terminal").focus();
});

const COMMANDS = {
  help: ["about ", "skills", "experience", "socials"].join("<br>"),
  about: "Hello :), I'm Gonçalo Veloso, a software enginner from Portugal.. </br> To find out more about my <u>skills</u> and <u>experience</u>, write the commands underlined, on the console. ",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Web Development",
    "Spring Boot",
    "Laravel",
    "AngularJS",
    "SQL Databases",
    "MongoDB"
  ].join("<br>"),
  experience:
  [  "Currently working as a Backend Engineer at Immera.", "Previously work: <ul> <li>Computer Vision Engineer for Centro Algoritmi and BOSCH Portugal</li> <li>Full Stack Engineer for Centro Algoritmi and BOSCH Portugal</li> </ul>"].join("<br>"),
   
  socials:
    'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/gveloso9983" class="social link">GitHub</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/goncalo-veloso/" class="social link">Linked In</a>"]',
};
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    terminalAction();
  }
});

function terminalAction() {
  let text = "";
  let val = terminal.value.toLowerCase();
  val = val.trim();
  document.getElementById("terminalContent").innerHTML +=
    "  <span> <p> guest@gveloso.github.io:$ ~ " + val + "</p> </span> ";
  if (val == "clear" || val == "cls") {
    document.getElementById("terminalContent").innerHTML = "";
  } else if (!COMMANDS.hasOwnProperty(val)) {
    if (val == "skill" || val == "sills" || val == "sklls") {
      output = `no such command: ${val}, did you mean skills?`;
    } else if (val == "abot" || val == "abut" || val == "abbout") {
      output = `no such command: ${val}, did you mean about?`;
    } else {
      output = `no such command: ${val}`;
    }
    printOptionValue(output);
  } else {
    output = `${COMMANDS[val]}`;
    printOptionValue(output);
  }
  terminal.value = "";
}
function scrollToBottom() {
  var terminalWindow = document.getElementsByClassName("terminalWindow");
  terminalWindow.scrollTop = terminalWindow.scrollHeight;
}

function printOptionValue(text) {
  document.getElementById("terminalContent").innerHTML +=
    " <p>" + text + "</p> ";
  scrollToBottom();
}

var printHelpList = () => {
  printOptionValue(help);
};

function greeting() {
  printOptionValue("Hello! Write Help for a list of commands!");
}
