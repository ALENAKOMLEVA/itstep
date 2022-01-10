class Request{
    client;
    pathLenght;
    comfort;
    childrenChair;
    capacity;
    description;
    constructor(client, pathLenght, comfort, childrenChair, capacity, description){
        this.client = client;
        this.pathLenght = pathLenght;
        this.comfort = comfort;
        this.childrenChair = childrenChair;
        this.capacity = capacity;
        this.description = description;
    }
}

export {Request}