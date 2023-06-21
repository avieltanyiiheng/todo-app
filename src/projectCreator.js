import toDoObj from "./toDoCreator";

export default class projectCreator {
  // create project
  constructor(projectName) {
    this.projectName = projectName;
    this.projects = [];
  }
  // append todo to project
  createToDo(value) {
    this.projects.push(new toDoObj(value));
  }
}
