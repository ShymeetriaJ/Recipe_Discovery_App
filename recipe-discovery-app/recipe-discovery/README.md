# SBA Title: 
SBA Advanced React: Recipe Discovery App 


# Date Completed: 
January 1, 2026

# Project Description: 
 
For this project, I built a client-side "Recipe Discovery"
 application. This project served as a comprehensive demonstration of advanced React concepts. This application allows users to browse recipes by category, search for specific recipes, view detailed recipe information, and manage a personal list of "favorite" recipes. This application uses a free, public API for recipe data and implements a variety of hooks, state management patterns, and routing solutions to create a feature rich, single-page application.

# Links, Usage, and Instructions:

https://github.com/ShymeetriaJ/Recipe_Discovery_App.git

To install and setup you will need the following:
Node.js(version 14 or higher)

1. Clone the repository:
git clone [recipe-discovery-app]
cd recipe-discovery-app

2. Navigate to the project directory: 
cd recipe-discovery

3. Install dependencies:
npm install

4. Start the development server:
npm run dev

5. Open your browser:
The application will automatically open, or navigate to the url shown in the terminal.



How to browse categories:

On the home page, browse through different recipe categories. Some categories include beef, chicken and goat. Click on any category to view all recipes in that category.

How to view recipe details:

You can click on any recipe card to view the full recipe. You can see ingredients, measurements, and step-by-step cooking instructions. You can also view the recipe's category and area of origin.

How to manage favorites:

Click the "Add to Favorites" button on any recipe detail page to save it. Click "Remove from Favorites" to remove it from your saved list
Access all your saved recipes by clicking "Favorites" in the navigation bar. Your favorites persist across your browser sessions using localStorage. 

How to search for recipes:

You can use the search bar in the navigation bar to find recipes by name. Type in your search term and press Enter or click the Search button. Browse through the search results.

How to use the Navigation bar:

The navigation bar is located at the top of the application. You can click the Recipe Discovery logo to return to the home page at any time.
The Home and Favorites links in the navigation bar are also available to quickly access those pages.

# My process:
My process started with assessing all of the project requirements and thinking about what actions my application needed to perform. I wrote  those actions down and then wrote the process that I needed to take to achieve that action. Some of these actions were familiar for example, using fetch to display data from the API. I went back to the project where I created an application that allowed users to lookup different countries and filter them by region. This helped bring my recollection back to fetching and try/catch. For other actions that I was unsure about like, the spinner, I did some reading and research. After researching I created my project structure with components, pages, and hooks. At this point I tried to think about building with the end in mind first. What made sense to start with. I knew that usefetch and local storage would be used by nearly every page so I started with that. From there I tackled components and pages at points where I felt like they would be needed at that specific time. I console.logged throughout and did the majority of my styling at the end of my process.  
 

# My reflection:

There were several challenging parts of this project in my opinion but, I will say that all of the challenges are helping me define my research for understanding. I know more of what type of information I'm looking for so my research is becoming quicker. It was a struggle to figure out why my search function was not working properly. I would type in the search field and nothing happened. Oh you forgot to add the return. This project required a lot of trouble shooting and debugging. It seemed like it took hours to debug for one issue and then another bug would appear. I have spent a lot of time trying to understand for loops and I actually understood conceptually how they work when I was trying to figure out how to display the recipe ingredients. Upon researching different methods for doing this I learned that if I manually tried accessing the ingredient list I could risk haveing empty list bullets that users could see if a particular recipe only had like six ingredients verses others that could have up to fifteen or more. A for loop was the smartest option which forced me to have more capacity for understanding the concept. Each project is helping me get better at something and I'm thankful for that. 


# Acknowledgments:
Discord group discussions. Class zoom recordings.Youtube: Imaginary Engineering, Angle Brace, Webstylepress, Bro Code, Code Stoic and dozens of other youtube channels.


# Resources:
learnjavascript.online 
https://react.dev/reference/react/useState
https://react.dev/reference/react/useCallback
https://react.dev/reference/react/useEffect
https://react.dev/reference/react/apis
https://www.geeksforgeeks.org/reactjs/how-to-create-a-food-recipe-app-using-reactjs/
https://matthieubertrand5.medium.com/build-a-recipe-app-fetching-api-using-react-443658f38064
https://devhints.io/reac
stackoverflow.com/sort-an-array
Discord group discussion 

# Troubleshooting:

If you encounter any errors, try deleting node_modules and reinstalling.

rm -rf node_modules
npm install

Be sure that you're in the correct directory before running commands. (recipe-discovery)

You can also try refreshing your browser.

