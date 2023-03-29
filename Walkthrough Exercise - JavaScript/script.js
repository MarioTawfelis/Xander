// Global variables
const searchInput = getElement('#search')
const btnContainer = getElement('#btn-container')
const productContainer = getElement('#productslist-container')

// Display list of products
// Argument: An array of products
function displayProducts(products) {}

// Create a category button
// Argument: The category, represented in string format.
function createBtn(category) {}

// Handle input
// Argument: a string representation of a category, used to compare against categories of products
function filterProducts(value) {}

// Grab element from the DOM
// Argument: a string representation of the element's ID
function getElement(identifier) {
    const el = document.querySelector(identifier)

    if(!el){
        throw new Error("Could not find the specified element.")
    }else{
        return el
    }
}

// Display category buttons
// Argument: An array of products
function displayCategories(products) {}

// Gather all categories from products data
// Argument: An array of products
function parseCategories(products) {}

// Display initial products list and category buttons
// No arguments
function init() {}
