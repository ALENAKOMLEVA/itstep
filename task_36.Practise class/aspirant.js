import { Student } from "./student.js";

class Aspirant extends Student{
    scienceWork;
    constructor(firstName, lastName, group, averageMark, scienceWork){
        super(firstName, lastName, group, averageMark)
        this.scienceWork = scienceWork;
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.group = group;
        // this.averageMark = averageMark;
    }
    getScolarship(sumScolarhip){
        sumScolarhip;
       
        if(this.averageMark == 5){
            return sumScolarhip = '200$';
        } else{
            return sumScolarhip = '150$';
        }
    }
}

export {Aspirant}