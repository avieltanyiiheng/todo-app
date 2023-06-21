import projectCreator from "./projectCreator";

function cancelButton() {
  const input = document.querySelector(".input");
  input.remove();
}
let projectStorage = [localStorage.projects];

function addNewProject() {
  const projectName = document.querySelector(".project-name");
  const activeProjectsDiv = document.querySelector(".active-projects");

  const newProject = new projectCreator(projectName.value);

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

export default function addProject() {
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
