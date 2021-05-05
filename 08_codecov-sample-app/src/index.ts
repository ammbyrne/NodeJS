const printName = (firstName: string, lastName: string) => {
    const fullName = firstName + " " + lastName;
    console.log(fullName);
    return fullName;
  }
module.exports = printName;