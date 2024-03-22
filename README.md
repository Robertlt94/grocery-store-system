# grocery-store-system
Grocery Store System Assignment

Objective
The goal is to develop a comprehensive web-based application tailored for a Grocery Store System. This project emphasizes user interaction and dynamic content management, offering a realistic scenario for handling inventory management, shopping lists, and the checkout process.

# Part 1: Create the Base Layout with HTML and CSS
Objective

Lay down the foundational structure and aesthetic design of the Grocery Store System.

# HTML Structure:

Ensure inclusion of the basic document structure (<!DOCTYPE html>, <html>, <head>, and <body> tags).
Within <head>, include a link to a CSS file named stylesheet.css.
The structure should feature:A header with a navigation bar that contains three links to different pages (options for these pages could include Home, About Us, Contact).
An <h1> title, for instance, "Your Local Grocery Store System".
Sections for various functions: an inventory list showcasing all items, a <form> to add new inventory items, and a notification area under the inventory list for alerting if certain items are low in stock (3 items or fewer).
The section for adding new inventory items should have input fields for the item name, quantity, price, and categories.Categories should be selectable through radio buttons offering predefined options (e.g., fruit, dairy).
CSS Styling:

Select a color scheme that's bright and welcoming, reminiscent of fresh produce and grocery items. Incorporate at least two brand colors.
Apply styling to the background, font colors, buttons, input elements, and the navigation bar to reflect the chosen theme.

# Part 2: Implement Base Functionality with JavaScript
Objective

Introduce functionality to manage inventory data, form interactions, and update the webpage dynamically based on user inputs.

# Data Structures:

Establish an array for storing grocery inventory items, where each item is an object with attributes for the item name, category, price, and quantity.
Develop a mechanism to monitor stock levels and signal when restocking is needed.
Grocery Inventory Item Class:

Construct an Item class with attributes for the item details as described above (item name, category, price, and quantity).

# Part 3: Dynamic Content and DOM Manipulation
Objective

Empower the Grocery Store System to dynamically showcase inventory summaries.

Displaying Inventory Summaries:

Attach an event listener to an "Add to Inventory" button within the inventory form. This button should gather data from the form's input fields, create a new Item instance, append it to the inventory array, and update the display to include the new item.

# Stretch Goal:

Add a feature where each new inventory item (as well as existing ones) is shown in a dynamically generated table. This table should update in real-time as new items are added, offering a concise and organized overview of the inventory.
