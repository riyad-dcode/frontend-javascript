interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }


interface Directors extends Teacher {
    numberOfReports: number;
  }


const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // extra property allowed
  };


const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };


interfacefunction printTeacher( {
    (firstName: string, lastName: string): string;
  } 
)

  

const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
    return `${firstName}. ${lastName}`;
  };

  // Interface describing the class instance
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Interface describing the class constructor
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Class implementing the StudentClassInterface
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    class StudentClass {
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }

