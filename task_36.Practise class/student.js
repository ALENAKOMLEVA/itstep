class Student{
    firstName;
    lastName;
    group;
    averageMark;
    constructor(firstName, lastName, group, averageMark){
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }
    getScolarship(){
        if(this.averageMark == 5){
            return '100$';
        } else{
            return  '80$';
        }
       
    }
}

export {Student}