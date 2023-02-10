//Have the Main Menu and a Sides Menu
let total_bill = 0;
let keys;
let values;
let userInput;
let userInputSideOne;
let userInputSideTwo;

let entrees = {
    breakfast: {
        "shrimp and grits": 15.00,
        "chicken and waffles": 12.00,
        "eggs bennedict": 13.00,
        "texas melt": 12.00
    },
    lunch: {
        "wagyu steak": 55.00,
        "ahi tuna": 30.00,
        "rack of lamb": 33.00,
        "center cut pork chop": 25.00
    },
    dinner: {
        "wagyu steak": 75.00,
        "ahi tuna": 35.00,
        "rack of lamb": 40.00,
        "center cut pork chop": 30.00
    }
}

let sides = {
    breakfastSides: {
        "sausage patty": 4.00,
        "hash browns": 3.00,
        "fruit oatmeal": 5.00,
        "toast": 2.00
    },
    lunchSides: {
        "chicken and sausage jambalaya": 6.00,
        "fries": 4.00,
        "mashed potatoes and gravy": 4.00,
        "side salad": 3.00,
        "broccolini": 5.00
    },
    dinnerSides: {
        "chicken and sausage jambalaya": 8.00,
        "fries": 6.00,
        "mashed potatoes and gravy": 6.00,
        "side salad": 5.00,
        "broccolini": 7.00
    }
}

//- show them the entire menu (print out)

function menu_viewer() {
    console.log(`Welcome to the Bottega Diner. Please have a look at our menu ${JSON.stringify(entrees)} ${JSON.stringify(sides)}`);
}

menu_viewer();

let welcomePrompt = prompt("Will you be joining us for breakfast, lunch, or dinner?").toLowerCase().trim();

//The below function is wrapped in parentheses and is ended with (). This syntax causes the function to be self invoking.
//https://www.w3schools.com/js/js_function_definition.asp
//JSON.stringify allows us to take the property of an object and display it as a string.
(function meal_service_select() {
    while (!["breakfast", "lunch", "dinner"].includes(welcomePrompt)) {
        welcomePrompt = prompt("Invalid selection. Please select either breakfast, lunch, or dinner.").toLowerCase().trim();
    }

    if (welcomePrompt === "breakfast") {
        console.log(`Have a look at our breakfast menu entrees.: ${JSON.stringify(entrees.breakfast)}. Please Choose two sides: ${JSON.stringify(sides.breakfastSides)}.`);
    } else if (welcomePrompt === "lunch") {
        console.log(`Have a look at our lunch menu: ${JSON.stringify(entrees.lunch)}. Please Choose two sides: ${JSON.stringify(sides.lunchSides)}.`);
    } else if (welcomePrompt === "dinner") {
        console.log(`Have a look at our dinner menu.: ${JSON.stringify(entrees.dinner)}. Please Choose two sides: ${JSON.stringify(sides.dinnerSides)}.`);
    } else {
        console.log("Uh oh, something went wrong!")
    }
})();

//Server comments bank 
function displayRandomComment() {
    const comments = [
        "Yummy!",
        "Great Choice!",
        "You have such a refined palette!",
        "You have great taste!",
        "A fine choice!",
        "My favorite! I'm just going to have a teensy bite before I bring your plate out. Okay?",
        "A mouth-watering delight!",
        "A fabulous choice indeed!",
        "Yuk! No one ever orders that!",
        "I'd stay away from that one if I were you, but it's too late. Unfortunately, I've already written it down. Can't take it back now.",
    ];

    const comment_randomizer = Math.floor(Math.random() * comments.length);
    const randomComment = comments[comment_randomizer];

    console.log(randomComment);
}

//User selects an entree
let breakfastEntreeSelect = () => {
    let keys = Object.keys(entrees.breakfast);
    let values = Object.values(entrees.breakfast);
    let userInput = prompt("Please choose one entree from the breakfast menu.").toLowerCase().trim();
    while (!keys.includes(userInput)) {
        userInput = prompt("Invalid selection. Please select one item from the breakfast entree menu.").toLowerCase().trim();
    };
    displayRandomComment();
    userSelection = keys.indexOf(userInput);
    total_bill += Number(values[userSelection]);
};

function breakfastSideSelect() {
    let keys = Object.keys(sides.breakfastSides);
    let values = Object.values(sides.breakfastSides);
    let userInputSideOne = prompt("Please choose your first side from the breakfast menu.").toLowerCase().trim();
    while (!keys.includes(userInputSideOne)) {
        userInputSideOne = prompt("Invalid selection. Please select your first side from the breakfast menu.").toLowerCase().trim();
    }
    displayRandomComment();
    let userInputSideTwo = prompt("Please choose your second side from the breakfast menu.").toLowerCase().trim();
    while (!keys.includes(userInputSideTwo)) {
        userInputSideTwo = prompt("Invalid selection. Please select your second side from the breakfast menu.").toLowerCase().trim();
    }
    displayRandomComment();
    let userSelectionOne = keys.indexOf(userInputSideOne);
    total_bill += Number(values[userSelectionOne]);
    let userSelectionTwo = keys.indexOf(userInputSideTwo);
    total_bill += Number(values[userSelectionTwo]);
};

let lunchEntreeSelect = () => {
    let keys = Object.keys(entrees.lunch);
    let values = Object.values(entrees.lunch);
    let userInput = prompt("Please choose one entree from the lunch menu.").toLowerCase().trim();
    while (!keys.includes(userInput)) {
        userInput = prompt("Invalid selection. Please select one item from the lunch entree menu.").toLowerCase().trim();
    };
    displayRandomComment();
    let userSelection = keys.indexOf(userInput);
    total_bill += Number(values[userSelection]);
};

let lunchSideSelect = () => {
    let keys = Object.keys(sides.lunchSides);
    let values = Object.values(sides.lunchSides);
    let userInputSideOne = prompt("Please choose your first side from the lunch menu.").toLowerCase().trim();
    while (!keys.includes(userInputSideOne)) {
        userInputSideOne = prompt("Invalid selection. Please select your first side from the lunch menu.").toLowerCase().trim();
    }
    displayRandomComment();
    let userInputSideTwo = prompt("Please choose your second side from the lunch menu.").toLowerCase().trim();
    while (!keys.includes(userInputSideTwo)) {
        userInputSideTwo = prompt("Invalid selection. Please select your second side from the lunch menu.").toLowerCase().trim();
    }
    displayRandomComment();
    let userSelectionOne = keys.indexOf(userInputSideOne);
    total_bill += Number(values[userSelectionOne]);
    let userSelectionTwo = keys.indexOf(userInputSideTwo);
    total_bill += Number(values[userSelectionTwo]);
};

let dinnerEntreeSelect = () => {
    let keys = Object.keys(entrees.dinner);
    let values = Object.values(entrees.dinner);
    let userInput = prompt("Please choose one entree from the dinner menu.").toLowerCase().trim();
    while (!keys.includes(userInput)) {
        userInput = prompt("Invalid selection. Please select one item from the dinner entree menu.").toLowerCase().trim();
    };
    displayRandomComment();
    userSelection = keys.indexOf(userInput);
    total_bill += Number(values[userSelection]);
};

let dinnerSideSelect = () => {
    let keys = Object.keys(sides.dinnerSides);
    let values = Object.values(sides.dinnerSides);
    let userInputSideOne = prompt("Please choose your first side from the dinner menu.").toLowerCase().trim();
    while (!keys.includes(userInputSideOne)) {
        userInputSideOne = prompt("Invalid selection. Please select your first side from the dinner menu.").toLowerCase().trim();
    }
    displayRandomComment();
    let userInputSideTwo = prompt("Please choose your second side from the dinner menu.").toLowerCase().trim();
    while (!keys.includes(userInputSideTwo)) {
        userInputSideTwo = prompt("Invalid selection. Please select your second side from the dinner menu.").toLowerCase().trim();
    }
    displayRandomComment();
    let userSelectionOne = keys.indexOf(userInputSideOne);
    total_bill += Number(values[userSelectionOne]);
    let userSelectionTwo = keys.indexOf(userInputSideTwo);
    total_bill += Number(values[userSelectionTwo]);
};

(function entreeSelector() {
    if (welcomePrompt === "breakfast") {
        breakfastEntreeSelect();
        breakfastSideSelect();
        console.log(`Ok. I have ${userInput} for your entree. With ${userInputSideOne} and ${userInputSideTwo} as your sides.`);
    } else if (welcomePrompt === "lunch") {
        lunchEntreeSelect();
        lunchSideSelect();
        console.log(`Ok. I have ${userInput} for your entree. With ${userInputSideOne} and ${userInputSideTwo} as your sides.`);
    } else if (welcomePrompt === "dinner") {
        dinnerEntreeSelect();
        dinnerSideSelect();
        console.log(`Ok. I have ${userInput} for your entree. With ${userInputSideOne} and ${userInputSideTwo} as your sides.`);
    }
})();

console.log(`Thanks for dining at the Bottega Diner. Your total bill is $${total_bill}. Don't forget to tip me!`)