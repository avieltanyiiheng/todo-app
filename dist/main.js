/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProjectButton.js":
/*!*********************************!*\
  !*** ./src/addProjectButton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectCreator */ "./src/projectCreator.js");


function cancelButton() {
  const input = document.querySelector(".input");
  input.remove();
}
let projectStorage = [localStorage.projects];

function addNewProject() {
  const projectName = document.querySelector(".project-name");
  const activeProjectsDiv = document.querySelector(".active-projects");

  const newProject = new _projectCreator__WEBPACK_IMPORTED_MODULE_0__["default"](projectName.value);

  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("active-project");

  newProjectButton.textContent = `${newProject.projectName}`;
  activeProjectsDiv.append(newProjectButton);

  // Saves newproject to localstorage
  projectStorage.push(newProject);
  console.log(`logging ${projectStorage}`);
  localStorage.setItem("projects", JSON.stringify(projectStorage));
  console.log(JSON.parse(localStorage["projects"]));

  //   DISPLAY ON MAIN
  newProjectButton.addEventListener("click", () => {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const mainText = document.createElement("h3");
    mainText.classList.add(".main-text");
    mainText.textContent = newProjectButton.textContent;

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task.";
    addTaskButton.classList.add("add-task-button");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.append(addTaskButton);

    // alert();

    //   functionality to add task

    addTaskButton.addEventListener("click", () => {
      const projectInput = document.createElement("input");
      projectInput.setAttribute("type", "text");
      projectInput.classList.add("newTask");
      const add = document.createElement("button");
      add.classList.add("add-this-task");
      add.textContent = "Add This Task.";
      taskDiv.append(projectInput, add);

      add.addEventListener("click", () => {
        newProject.createToDo(projectInput.value);
        const allProjects = newProject.projects;

        // TODO: CONTONUE FROM HERE TODO: TODO:
        for (let i = 0; i < allProjects.length; i++) {
          const task = document.createElement("div");
          task.classList.add("task");
          task.textContent = allProjects[i].title;
          main.append(task);

          console.log("test" + allProjects[i].title);
        }
      });
    });

    // TODO: input appended task to the object, display on dom

    main.append(mainText);
    const content = document.querySelector(".content");
    content.append(taskDiv);

    console.log(newProjectButton.textContent.title);
  });
}

function addProject() {
  const navBar = document.querySelector(".navBar");

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input");

  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.classList.add("project-name");

  const inputButtons = document.createElement("div");

  const addProjButton = document.createElement("button");
  addProjButton.textContent = "Add Project";

  //   TODO: ADD FUNCTIONALITY TO ADD PROJECT
  addProjButton.addEventListener("click", () => {
    addNewProject();
  });

  const cancelProjButton = document.createElement("button");
  cancelProjButton.textContent = "Cancel";
  cancelProjButton.addEventListener("click", cancelButton);

  inputButtons.append(addProjButton, cancelProjButton);

  inputDiv.append(inputField, inputButtons);

  navBar.append(inputDiv);
}


/***/ }),

/***/ "./src/displayCurrentSavedProjects.js":
/*!********************************************!*\
  !*** ./src/displayCurrentSavedProjects.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayCurrentSavedProjects)
/* harmony export */ });
let projectStorage = [localStorage.projects];

function displayCurrentSavedProjects() {
  const savedProjectsString = localStorage.getItem("projects");
  const projectStorage = JSON.parse(savedProjectsString);

  for (let i = 1; i < projectStorage.length; i++) {
    const activeProjectsDiv = document.querySelector(".active-projects");
    const newProjectButton = document.createElement("button");
    newProjectButton.classList.add("active-project");
    newProjectButton.textContent = projectStorage[i].projectName;
    activeProjectsDiv.append(newProjectButton);
  }
  console.log(`test ${projectStorage}`);
}


/***/ }),

/***/ "./src/projectCreator.js":
/*!*******************************!*\
  !*** ./src/projectCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreator)
/* harmony export */ });
/* harmony import */ var _toDoCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoCreator */ "./src/toDoCreator.js");


class projectCreator {
  // create project
  constructor(projectName) {
    this.projectName = projectName;
    this.projects = [];
  }
  // append todo to project
  createToDo(value) {
    this.projects.push(new _toDoCreator__WEBPACK_IMPORTED_MODULE_0__["default"](value));
  }
}


/***/ }),

/***/ "./src/renderDefault.js":
/*!******************************!*\
  !*** ./src/renderDefault.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMain)
/* harmony export */ });
/* harmony import */ var _addProjectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProjectButton */ "./src/addProjectButton.js");
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreator */ "./src/projectCreator.js");



const proj1 = new _projectCreator__WEBPACK_IMPORTED_MODULE_1__["default"]("proj1");

function renderMain() {
  const main = document.querySelector(".content");

  const header = document.createElement("div");
  //   header
  header.classList.add("header");
  header.textContent = "ToDo List!";

  // Navbar
  const navBar = document.createElement("div");
  navBar.classList.add("navBar");

  // Navbar items
  const projectHeader = document.createElement("h3");
  projectHeader.textContent = "Projects!";

  //   DUmmy PRoject and project DIV
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("active-projects");

  const dummyActiveProjects = document.createElement("button");
  dummyActiveProjects.classList.add("active-project");
  dummyActiveProjects.textContent = "proj1";

  projectDiv.append(dummyActiveProjects);

  // Add project button
  const addProjectButton = document.createElement("button");
  addProjectButton.classList.add("add-project-button");
  addProjectButton.textContent = "Add Project!";

  //   TODO: ADD FUNCTIONALITY TO ADD PROJECT below
  addProjectButton.addEventListener("click", () => {
    (0,_addProjectButton__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  navBar.append(projectHeader, projectDiv, addProjectButton);

  const content = document.createElement("div");
  content.classList.add("main");
  const contentText = document.createElement("h3");
  contentText.textContent = "Main";
  contentText.classList.add("main-text");
  content.append(contentText);

  main.append(header, navBar, content);
}

console.log(proj1);


/***/ }),

/***/ "./src/selectAllProjects.js":
/*!**********************************!*\
  !*** ./src/selectAllProjects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectAllProjects)
/* harmony export */ });
function selectAllProjects() {
  const allProjects = document.querySelectorAll(".active-project");

  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      alert();
    });
  });
}


/***/ }),

/***/ "./src/toDoCreator.js":
/*!****************************!*\
  !*** ./src/toDoCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoObj)
/* harmony export */ });
class toDoObj {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectCreator */ "./src/projectCreator.js");
/* harmony import */ var _renderDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDefault */ "./src/renderDefault.js");
/* harmony import */ var _displayCurrentSavedProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayCurrentSavedProjects */ "./src/displayCurrentSavedProjects.js");
/* harmony import */ var _selectAllProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectAllProjects */ "./src/selectAllProjects.js");





const a = new _projectCreator__WEBPACK_IMPORTED_MODULE_0__["default"]("test projs");

(0,_renderDefault__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_displayCurrentSavedProjects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_selectAllProjects__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix1REFBYzs7QUFFdkM7QUFDQTs7QUFFQSxvQ0FBb0MsdUJBQXVCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUEsa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RvQzs7QUFFckI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvREFBTztBQUNsQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1o0QztBQUNFOztBQUU5QyxrQkFBa0IsdURBQWM7O0FBRWpCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZEQUFVO0FBQ2QsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckRlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDTDtBQUMrQjtBQUNwQjs7QUFFcEQsY0FBYyx1REFBYzs7QUFFNUIsMERBQVU7QUFDVix3RUFBMkI7QUFDM0IsOERBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYWRkUHJvamVjdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kaXNwbGF5Q3VycmVudFNhdmVkUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcmVuZGVyRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zZWxlY3RBbGxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b0RvQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tIFwiLi9wcm9qZWN0Q3JlYXRvclwiO1xuXG5mdW5jdGlvbiBjYW5jZWxCdXR0b24oKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKTtcbiAgaW5wdXQucmVtb3ZlKCk7XG59XG5sZXQgcHJvamVjdFN0b3JhZ2UgPSBbbG9jYWxTdG9yYWdlLnByb2plY3RzXTtcblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKTtcbiAgY29uc3QgYWN0aXZlUHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wcm9qZWN0c1wiKTtcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3RDcmVhdG9yKHByb2plY3ROYW1lLnZhbHVlKTtcblxuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG5cbiAgbmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IGAke25ld1Byb2plY3QucHJvamVjdE5hbWV9YDtcbiAgYWN0aXZlUHJvamVjdHNEaXYuYXBwZW5kKG5ld1Byb2plY3RCdXR0b24pO1xuXG4gIC8vIFNhdmVzIG5ld3Byb2plY3QgdG8gbG9jYWxzdG9yYWdlXG4gIHByb2plY3RTdG9yYWdlLnB1c2gobmV3UHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKGBsb2dnaW5nICR7cHJvamVjdFN0b3JhZ2V9YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdFN0b3JhZ2UpKTtcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbXCJwcm9qZWN0c1wiXSkpO1xuXG4gIC8vICAgRElTUExBWSBPTiBNQUlOXG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBtYWluVGV4dC5jbGFzc0xpc3QuYWRkKFwiLm1haW4tdGV4dFwiKTtcbiAgICBtYWluVGV4dC50ZXh0Q29udGVudCA9IG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFzay5cIjtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idXR0b25cIik7XG5cbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGl2XCIpO1xuICAgIHRhc2tEaXYuYXBwZW5kKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgLy8gYWxlcnQoKTtcblxuICAgIC8vICAgZnVuY3Rpb25hbGl0eSB0byBhZGQgdGFza1xuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrXCIpO1xuICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGFkZC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRoaXMtdGFza1wiKTtcbiAgICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQWRkIFRoaXMgVGFzay5cIjtcbiAgICAgIHRhc2tEaXYuYXBwZW5kKHByb2plY3RJbnB1dCwgYWRkKTtcblxuICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3QuY3JlYXRlVG9Ebyhwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IG5ld1Byb2plY3QucHJvamVjdHM7XG5cbiAgICAgICAgLy8gVE9ETzogQ09OVE9OVUUgRlJPTSBIRVJFIFRPRE86IFRPRE86XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpXS50aXRsZTtcbiAgICAgICAgICBtYWluLmFwcGVuZCh0YXNrKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiICsgYWxsUHJvamVjdHNbaV0udGl0bGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFRPRE86IGlucHV0IGFwcGVuZGVkIHRhc2sgdG8gdGhlIG9iamVjdCwgZGlzcGxheSBvbiBkb21cblxuICAgIG1haW4uYXBwZW5kKG1haW5UZXh0KTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kKHRhc2tEaXYpO1xuXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudC50aXRsZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdkJhclwiKTtcblxuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcblxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG5cbiAgY29uc3QgaW5wdXRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBhZGRQcm9qQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvakJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcblxuICAvLyAgIFRPRE86IEFERCBGVU5DVElPTkFMSVRZIFRPIEFERCBQUk9KRUNUXG4gIGFkZFByb2pCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGROZXdQcm9qZWN0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbFByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsUHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsQnV0dG9uKTtcblxuICBpbnB1dEJ1dHRvbnMuYXBwZW5kKGFkZFByb2pCdXR0b24sIGNhbmNlbFByb2pCdXR0b24pO1xuXG4gIGlucHV0RGl2LmFwcGVuZChpbnB1dEZpZWxkLCBpbnB1dEJ1dHRvbnMpO1xuXG4gIG5hdkJhci5hcHBlbmQoaW5wdXREaXYpO1xufVxuIiwibGV0IHByb2plY3RTdG9yYWdlID0gW2xvY2FsU3RvcmFnZS5wcm9qZWN0c107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50U2F2ZWRQcm9qZWN0cygpIHtcbiAgY29uc3Qgc2F2ZWRQcm9qZWN0c1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3RTdG9yYWdlID0gSlNPTi5wYXJzZShzYXZlZFByb2plY3RzU3RyaW5nKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wcm9qZWN0c1wiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdFN0b3JhZ2VbaV0ucHJvamVjdE5hbWU7XG4gICAgYWN0aXZlUHJvamVjdHNEaXYuYXBwZW5kKG5ld1Byb2plY3RCdXR0b24pO1xuICB9XG4gIGNvbnNvbGUubG9nKGB0ZXN0ICR7cHJvamVjdFN0b3JhZ2V9YCk7XG59XG4iLCJpbXBvcnQgdG9Eb09iaiBmcm9tIFwiLi90b0RvQ3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0Q3JlYXRvciB7XG4gIC8vIGNyZWF0ZSBwcm9qZWN0XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgfVxuICAvLyBhcHBlbmQgdG9kbyB0byBwcm9qZWN0XG4gIGNyZWF0ZVRvRG8odmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IHRvRG9PYmoodmFsdWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vYWRkUHJvamVjdEJ1dHRvblwiO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gXCIuL3Byb2plY3RDcmVhdG9yXCI7XG5cbmNvbnN0IHByb2oxID0gbmV3IHByb2plY3RDcmVhdG9yKFwicHJvajFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICBoZWFkZXJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9EbyBMaXN0IVwiO1xuXG4gIC8vIE5hdmJhclxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdkJhclwiKTtcblxuICAvLyBOYXZiYXIgaXRlbXNcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHMhXCI7XG5cbiAgLy8gICBEVW1teSBQUm9qZWN0IGFuZCBwcm9qZWN0IERJVlxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RzXCIpO1xuXG4gIGNvbnN0IGR1bW15QWN0aXZlUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkdW1teUFjdGl2ZVByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgZHVtbXlBY3RpdmVQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwicHJvajFcIjtcblxuICBwcm9qZWN0RGl2LmFwcGVuZChkdW1teUFjdGl2ZVByb2plY3RzKTtcblxuICAvLyBBZGQgcHJvamVjdCBidXR0b25cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QhXCI7XG5cbiAgLy8gICBUT0RPOiBBREQgRlVOQ1RJT05BTElUWSBUTyBBREQgUFJPSkVDVCBiZWxvd1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdCgpO1xuICB9KTtcblxuICBuYXZCYXIuYXBwZW5kKHByb2plY3RIZWFkZXIsIHByb2plY3REaXYsIGFkZFByb2plY3RCdXR0b24pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb25zdCBjb250ZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29udGVudFRleHQudGV4dENvbnRlbnQgPSBcIk1haW5cIjtcbiAgY29udGVudFRleHQuY2xhc3NMaXN0LmFkZChcIm1haW4tdGV4dFwiKTtcbiAgY29udGVudC5hcHBlbmQoY29udGVudFRleHQpO1xuXG4gIG1haW4uYXBwZW5kKGhlYWRlciwgbmF2QmFyLCBjb250ZW50KTtcbn1cblxuY29uc29sZS5sb2cocHJvajEpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VsZWN0QWxsUHJvamVjdHMoKSB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmUtcHJvamVjdFwiKTtcblxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWxlcnQoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0b0RvT2JqIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gXCIuL3Byb2plY3RDcmVhdG9yXCI7XG5pbXBvcnQgcmVuZGVyTWFpbiBmcm9tIFwiLi9yZW5kZXJEZWZhdWx0XCI7XG5pbXBvcnQgZGlzcGxheUN1cnJlbnRTYXZlZFByb2plY3RzIGZyb20gXCIuL2Rpc3BsYXlDdXJyZW50U2F2ZWRQcm9qZWN0c1wiO1xuaW1wb3J0IHNlbGVjdEFsbFByb2plY3RzIGZyb20gXCIuL3NlbGVjdEFsbFByb2plY3RzXCI7XG5cbmNvbnN0IGEgPSBuZXcgcHJvamVjdENyZWF0b3IoXCJ0ZXN0IHByb2pzXCIpO1xuXG5yZW5kZXJNYWluKCk7XG5kaXNwbGF5Q3VycmVudFNhdmVkUHJvamVjdHMoKTtcbnNlbGVjdEFsbFByb2plY3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=