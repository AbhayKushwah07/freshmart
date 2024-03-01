let Allitems = [];

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random category
function getRandomCategory() {
    const categories = ['fruit', 'vegetable', 'dairy'];
    return categories[getRandomInt(0, categories.length - 1)];
}

// Generate 40 items
for (let i = 1; i <= 40; i++) {
    Allitems.push({
        id: i,
        latest: !!(Math.random() < 0.5), // Randomly set to true or false
        img: 'asset/img/honey.jpg', // Same image path for all items
        title: `Item ${i}`, // Random title or you can use your own title generation logic
        amount: getRandomInt(5, 50), // Random amount
        category: getRandomCategory() // Random category
    });
}


