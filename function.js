// Function (No param, No retrun)
function hello(){
    console.log("Hello, World!");
}

hello();

// Function (No param, Return)
function getGreeting() {
    return "Hello";
}
const greeting = getGreeting();
console.log(greeting);

// Function (With param, No return)
function greet(name){
    console.log("Hello "+name)
}

greet("Alice");

// Function (With param, Return)
function getPersonalGreeting(name="Guest") {
    return "Hello " + name;
}

console.log(getPersonalGreeting("John"));