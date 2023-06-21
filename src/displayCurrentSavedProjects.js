let projectStorage = [localStorage.projects];

export default function displayCurrentSavedProjects() {
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
