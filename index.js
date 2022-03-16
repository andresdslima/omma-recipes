// 1)
const company = 'Omma';
console.log(`\nWelcome to ${company} Recipes!\n`);

// 2)
var recipes = [];

// 3)
recipes = [
    {
        id: Math.random().toString().substr(2, 6),
        title: 'Pumpkin Risotto',
        difficulty: 'Simple',
        ingredients: [
            '1/2 kg of kabotcha type pumpkin', '2 tablespoons of olive oil', '1 medium onion finely chopped',
        ],
        instructions: 'Peel the pumpkin and cut into small cubes. Reserve. Place the oil in a deep pan and add the chopped',
        video: 'https://www.youtube.com/embed/KfpK5AFCVmQ',
        vegan: false,
    },
];

// 4)
const addRecipe = (title, difficulty, ingredients, instructions, video, vegan) => {

    recipes.push({
        id: Math.random().toString().substr(2, 6),
        title,
        difficulty,
        ingredients,
        instructions,
        video,
        vegan,
    });

    console.log('Our Recipes List:\n');
    console.log(recipes);
    console.log(`\nRecipe "${title}" added successfully!\n`);
    console.log('---------------------------------------');
}

addRecipe('Banana Cake', 'Moderate', ['1 spoon of sugar', '2 bananas'], 'Peel the pumpkin and cut into small cubes. Reserve. Place the oil in a deep pan', 'https://www.youtube.com', true,);

addRecipe('Tabule', 'Complex', ['1 cup of water', '1 thing'], 'jajansddkn aksdkjjbjbhbnak fdfdfsndkas', 'https://www.google.com', false,);

// 5)
const showRecipes = () => {
    recipes.forEach(item => {
        console.log(`Recipe: "${item.title}"`);

        console.log(`Ingredients:\n> ${item.ingredients}`);

        console.log(`Vegan: ${item.vegan}\n`);
        console.log('---------------------------------------');
    })
}
showRecipes();

// 6)
const deleteRecipe = id => {
    const newRecipes = recipes.filter(item => item.id != id);
    const recipe = recipes.filter(item => !newRecipes.includes(item));

    if (!recipe.length) {
        return console.log(`Recipe "${id}" not found.`);
    }

    recipes = newRecipes;
    console.log(`Recipe "${id} - ${recipe[0].title}" deleted!\n`);
    console.log('\nOur Recipes List:\n');
    console.log(recipes);
}

deleteRecipe(999999);

// 7)
const searchRecipes = (word) => {
    const newRecipes = recipes.filter(item => item.title.toLowerCase().includes(word.toLowerCase()));

    if (!newRecipes.length) {
        return console.log(`\nRecipe "${word}" not found.\n`);
    }

    let results = newRecipes.length;
    console.log(`\nRecipes containing "${word}": ${results}\n`);
    console.log(newRecipes);
}

searchRecipes('RISOTTO');
searchRecipes('water');

// 8)
const updateRecipes = (id, recipe) => {
    let updated = false;

    const newRecipes = recipes.map(item => {
        if (item.id == id) {
            if (recipe.title) {
                item.title = recipe.title;
            }
            if (recipe.difficulty) {
                item.difficulty = recipe.difficulty;
            }
            if (recipe.ingredients) {
                item.ingredients = recipe.ingredients;
            }
            if (recipe.instructions) {
                item.instructions = recipe.instructions;
            }
            if (recipe.video) {
                item.video = recipe.video;
            }
            if (recipe.vegan) {
                item.vegan = recipe.vegan;
            }
            updated = true;
            console.log(`\nRecipe "${id} - ${item.title}" updated!\n`);
        }
    });

    if (!updated) {
        return console.log(`\nRecipe "${id}" not found...\n`);
    }

    console.log('Our Recipes List:\n');
    console.log(recipes);
}

updateRecipes(999999);