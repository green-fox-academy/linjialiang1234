function Person (name, age) {
  this.name = name;
  this.age = age;
}

function Employee (name,age,salary, department="unknowm", hiredAt = new Date(), leftAt = null, status = "active", maxSalaryMultiplier =1) {
  Person.call(this, name, age);
  this.salary = salary;
  this.department = department;
  this.hiredAt = hiredAt;
  this.leftAt = leftAt;
  this.status = status;
  this.maxSalaryMultiplier = maxSalaryMultiplier;

  
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getInfo = function () {
  console.log(this.name + " " + this.age + "works at department for salary usd since|from hiredAt " + this.hiredAt);

}

Employee.prototype.increaseSalaryBy = function(newSalary) {
  if(newSalary/this.salary > this.maxSalaryMultiplier) {
    console.log(this.name + " " + "can not increase the salary");
  }
  else {
    console.log(this.name + " " + "increase the salary by " + newSalary);
  }
}

Employee.prototype.setDepartment = function (newDepartment ) {
  this.department = newDepartment;
  console.log(this.name + " in " + this.department);

}
var employ1 = new Employee ("ABC", 22, 1000, "Google", 2017,null, "active", 1);
employ1.getInfo();
employ1.increaseSalaryBy(1000);
employ1.setDepartment("Google's Front End Development");

function Developer ( name,age,salary, department="unknowm", hiredAt = new Date(), leftAt = null, status = "active", maxSalaryMultiplier =1.05) {
  Employee.call(this, name,age,salary, department, hiredAt, leftAt, status, maxSalaryMultiplier);
  this.level = "";
  this.changeLevel = function (newLevel) {
    this.level = newLevel;
    console.log(this.name + " is in this level: " + this.level + " and his maxSalaryMultiplier is: " + this.maxSalaryMultiplier);

  }
}

Developer.prototype = Object.create(Employee.prototype);

var developer1 = new Developer("EFG", 23, 3000, "Google", 2017,null, "active", 1.05);
developer1.changeLevel("senior");

//promoteDeveloper(Developer developerToPromote, string newLevel):
// boolean throws an Error if the parameter is not a Developer or its descendant
// returns false if the newLevel equals to the original value
function Director(name,age,salary, department="unknowm", hiredAt = new Date(), leftAt = null, status = "active", maxSalaryMultiplier =1.1) {
  Employee.call(this, name,age,salary, department, hiredAt, leftAt, status, maxSalaryMultiplier);
  
  this.promoteDeveloper = function (developerToPromote, newLevel) {
    this.level = newLevel;
    if(developerToPromote instanceof Employee === false) {
      console.log(this.name + " is not our staff. ");
    }else {
      console.log(this.name 
      + " is our director at " + this.level );
    }

  }
}
Director.prototype = Object.create(Employee.prototype);

var director1 = new Director("HIJ", 28, 10000, "Google", 2017,null, "active", 1.1);
director1.promoteDeveloper(developer1, "senior");




