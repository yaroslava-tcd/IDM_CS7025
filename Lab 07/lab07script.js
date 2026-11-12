class Project{
    name;
    constructor(name){
        this.name = name;
    }
    display() {
        console.log(`Hello! This project is ${this.name}`);
    }
}

let projectDocumentary = new Project("Maynooth Library Cat Documentary");
projectDocumentary.display();

class Design extends Project {
    link;
    constructor(link) {
        this.link = link;
    }
    linkDisplay() {
        console.log(`Here's the link `)
    }
}

let appDesign = new Design("http://");
appDesign.linkDisplay();