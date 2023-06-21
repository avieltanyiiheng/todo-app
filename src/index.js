import projectCreator from "./projectCreator";
import renderMain from "./renderDefault";
import displayCurrentSavedProjects from "./displayCurrentSavedProjects";
import selectAllProjects from "./selectAllProjects";

const a = new projectCreator("test projs");

renderMain();
displayCurrentSavedProjects();
selectAllProjects();
