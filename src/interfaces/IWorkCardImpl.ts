import type { Work } from "./IWorkCard";

export class WorkCard implements Work {
  title: String;
  description: String;
  link: String | URL;
  img: String | URL;
  technologies: String[];
  type: String;

  constructor(
    title: String,
    description: String,
    link: String | URL,
    img: String | URL,
    techs: String[],
    type: String
  ) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.link = link;
    this.technologies = techs;
    this.type = type;
  }
}
