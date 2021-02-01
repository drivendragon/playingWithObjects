
//How would you print/log John's age?

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
var result = users.filter(obj => {
    return obj.name === "John"
})
console.log(result)

//How would you print/log the name of the first object?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users[0])


//How would you print/log the name and age of each user using a for loop
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
users.forEach((element) => {
    console.log("Name: ", element.name, "Age: ", element.age); // 100, 200, 300
});