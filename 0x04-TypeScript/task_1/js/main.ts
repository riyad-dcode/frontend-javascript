interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    contract: boolean;
    location: string;
  }


interface Directors {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    numberOfReports: number;
    location: string;
  }


const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    yearsOfExperience: 2,
    location: 'London',
    contract: false,
  };


  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    yearsOfExperience: 4,
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };


  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
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
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }

  