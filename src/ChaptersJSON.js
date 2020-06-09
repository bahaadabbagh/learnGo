import database from "./firebaseConfig";

let response = [
  {
    sec: "Github",
    name: "Git: gitting and adding to Code",
    time: 120,
    finished: true,
    lessons: 7,
    needHelp: ""
  },
  {
    sec: "Github",
    name: "Git WorkFLow",
    time: 200,
    finished: true,
    lessons: 10,
    needHelp: ""
  },
  {
    sec: "HTML And CSS",
    name: "A Quick Tour of the Web",
    time: 240,
    finished: true,
    lessons: 12,
    needHelp: ""
  },
  {
    sec: "HTML And CSS",
    name: "HTML Fundamentals",
    time: 260,
    finished: true,
    lessons: 13,
    needHelp: ""
  },
  {
    sec: "HTML And CSS",
    name: "CSS Essentials",
    time: 180,
    finished: true,
    lessons: 9,
    needHelp: ""
  },
  {
    sec: "HTML And CSS",
    name: "Page Layout",
    time: 300,
    finished: true,
    lessons: 15,
    needHelp: ""
  },
  {
    sec: "HTML And CSS",
    name: "Page Layout",
    time: 300,
    finished: true,
    lessons: 15,
    needHelp: ""
  },
  {
    sec: "HTML And CSS",
    name: "Box Styles",
    time: 20,
    finished: true,
    lessons: 1,
    needHelp: ""
  },
  {
    sec: "HTML And CSS",
    name: "Responsive Layout",
    time: 180,
    finished: true,
    lessons: 9,
    needHelp: ""
  },
  {
    sec: "HTML And CSS",
    name: "Bootstap Framework",
    time: 100,
    finished: true,
    lessons: 5,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "Defining Front-End Web Program",
    time: 40,
    finished: true,
    lessons: 2,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "Manipulating the DOM",
    time: 40,
    finished: true,
    lessons: 2,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "Recognizing JavaScrip Events",
    time: 40,
    finished: true,
    lessons: 2,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "Communication with the Server",
    time: 240,
    finished: true,
    lessons: 12,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "Pulling It All Together",
    time: 180,
    finished: true,
    lessons: 9,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "Formalizing JS: Data Types Comparisons Conditionals",
    time: 40,
    finished: true,
    lessons: 2,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "ES6 Syntax",
    time: 60,
    finished: true,
    lessons: 3,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "Advanced Function Usage",
    time: 340,
    finished: true,
    lessons: 17,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "Object Orientation in JavaScript",
    time: 160,
    finished: true,
    lessons: 8,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "OO JavaScript: Inheritance",
    time: 120,
    finished: true,
    lessons: 6,
    needHelp: ""
  },
  {
    sec: "JavaScript",
    name: "OO JavaScrip ProtoTypal Inheritance",
    time: 120,
    finished: true,
    lessons: 6,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Introduction To React",
    time: 60,
    finished: true,
    lessons: 3,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Introduction To Components",
    time: 80,
    finished: true,
    lessons: 4,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Props and State",
    time: 180,
    finished: true,
    lessons: 9,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Events",
    time: 120,
    finished: true,
    lessons: 6,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Forms",
    time: 60,
    finished: true,
    lessons: 3,
    needHelp: ""
  },
  {
    sec: "React",
    name: "LifeCycle Method",
    time: 120,
    finished: true,
    lessons: 6,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Async React",
    time: 60,
    finished: true,
    lessons: 3,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Advanced Components",
    time: 120,
    finished: true,
    lessons: 6,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Debugging Practice",
    time: 40,
    finished: true,
    lessons: 2,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Under The Hood",
    time: 100,
    finished: true,
    lessons: 5,
    needHelp: ""
  },
  {
    sec: "React",
    name: "Client-Side Routing",
    time: 80,
    finished: true,
    lessons: 4,
    needHelp: ""
  }
];
function toAdd() {
  response.map(function(e, index) {
    database
      .collection("Curriculim")
      .doc(index)
      .add({
        sec: e.sec,
        name: e.name,
        time: e.time,
        finished: true,
        lessons: e.lessons,
        needHelp: ""
      });
  });
}
document.addEventListener("onload", toAdd());
