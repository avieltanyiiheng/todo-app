import addProject from "./addProjectButton";
import projectCreator from "./projectCreator";

const proj1 = new projectCreator("proj1");

export default function renderMain() {
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
    addProject();
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
