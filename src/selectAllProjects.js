export default function selectAllProjects() {
  const allProjects = document.querySelectorAll(".active-project");

  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      alert();
    });
  });
}
