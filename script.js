// Define the Person class
class Person {
  // Constructor method
  constructor(name, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
  }

  // Member function using an arrow function
  printDetails = () => {
    console.log(`Name: ${this.name}, Email: ${this.email}, Mobile: ${this.mobile}`);
  }

  // Static method (non-member function)
  static isValidEmail = (email) => {
    // Basic email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Function to create a Person object
const createPerson = (name, email, mobile) => {
  // Validate email before creating the object
  if (!Person.isValidEmail(email)) {
    throw new Error("Invalid email format.");
  }

  return new Person(name, email, mobile);
};

// Define the Student class that inherits from Person
class Student extends Person {
  // Constructor method with an additional parameter
  constructor(name, email, mobile, rollNo) {
    // Call the parent class constructor using super
    super(name, email, mobile);
    this.rollNo = rollNo;
  }

  // Override the printDetails method from the parent class
  printDetails = () => {
    console.log(`Name: ${this.name}, Email: ${this.email}, Mobile: ${this.mobile}, Roll No: ${this.rollNo}`);
  }

  // Function to generate a receipt for a student
  generateStudentReceipt = () => {
    if (this.rollNo === 0) {
      throw new Error("Invalid roll number");
    }
    return `Student Order Receipt\nName: ${this.name}, Email: ${this.email}, Mobile: ${this.mobile}, Roll No: ${this.rollNo}`;
  }
}

try {
  // Create a Person object
  const person = createPerson("Swapnil Mulani", "swapnil@gmail.com", "123456789");
  person.printDetails();

  // Create a Student object
  const student = new Student("karan Smith", "karan@gmail.com", "987654321", 12345);
  student.printDetails();
  const studentReceipt = student.generateStudentReceipt();
  console.log(studentReceipt);

  // Attempt to create a Student object with an invalid roll number
  const invalidStudent = new Student("Invalid Student", "invalid@example.com", "111111111", 0);
} catch (error) {
  console.error("Error:", error.message);
}
