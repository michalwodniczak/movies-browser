# **MOVIES BROWSER**

Welcome to our Movies Browser project! We're excited to have you here at the early stages of our app development journey. Be sure to check back soon as we continue to enhance and refine the experience.

## Demo
Explore our current progress on the live demo: https://bedicooper.github.io/movies-browser/

![gif](https://raw.githubusercontent.com/bedicooper/movies-browser/main/readme_gifMain.gif)

## Authors
- [Patrycja Gomza](https://github.com/patrycja-gomza)
- [Michał Wodniczak](https://github.com/widmo200)
- [Mateusz Bednarz](https://github.com/bedicooper)

## General Info
### Overview
Movies Browser is a web application created as part of a 4-week group project, marking the culmination of our Frontend Developer course at the YouCode online programming school. Our teamwork was organized using Scrum, and we managed tasks through Trello. For design, we utilized Figma, and data for the application is sourced from The Movie Database API.

This project enriched our skills in collaborative teamwork, focusing on effective communication, code reviews within the team, creating and reviewing pull requests, and working on code under time pressure to meet project deadlines. We also gained valuable experience in Scrum methodology, participated in daily stand-ups within our team, and engaged in weekly check-ins with our mentor, who assumed the role of the client/product owner, evaluating our progress. This comprehensive experience has allowed us to grow as developers and navigate various aspects of real-world project development.

### Features
- **Navigation:** Seamlessly navigate between movies and people sections for a well-organized exploration of both cinematic worlds.
- **Pagination:** Enhance your browsing experience with pagination functionality. Utilizing current page parameters in the URL, our app provides intuitive buttons, including First, Previous, Next, and Last, allowing you to easily navigate through Movie List and People List pages.
- **Popular Movie Lists:** Explore a curated selection of popular movies on our main homepage.
- **Movie Details:** Click on a movie from the popular lists to view detailed.
- **List of Actors:** Discover a list of actors and click on each one to explore more details.
- **Actor Page:** Explore details about different actors.
- **Enhanced UI - Hover Styling:** Elevate user engagement with dynamic styling as you hover over movies, actors, or buttons, offering a visually pleasing experience.
- **Responsiveness:** Ensuring a seamless experience on various devices, from mobile phones to tablets.
- **Loading and Error States:** Our app gracefully handles loading and error states for a smoother user experience.
<img src="https://raw.githubusercontent.com/bedicooper/movies-browser/main/readme_imgError.png" alt="error png" width="500">

- **No Results Page:** We are actively developing a dedicated page for instances where search queries yield no results. This feature aims to provide users with a clear and informative page, guiding them effectively when their search doesn't match any records.
- **Search Functionality:** Utilize the input for searching movies based on query parameters.

![gif](https://raw.githubusercontent.com/bedicooper/movies-browser/main/readme_gifSearch.gif)

Our ongoing efforts focus on refining every aspect of your interaction with our application, making it not only functional but also aesthetically enjoyable. Watch out for these exciting updates in the near future! 🚀

### Development Workflow
#### `🚧 Project Bootstrapping:` This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

#### `🔄 State Management:` Leveraging Redux for state management, including middleware for asynchronous operations.
#### `💅 Styling:` Utilizing JSX, Flexbox, CSS Grid, and Styled Components for an appealing and responsive design.

#### `⏳ Asynchronous Operations:` Implementing asynchronous functionality using Axios, Async/Await, and Redux-Saga.

#### `💡 Inspiration:` This project draws inspiration from the "Frontend Developer from the Basics" course at the online programming school YouCode.

## Technologies
### Libraries
This project incorporates a variety of libraries, including but not limited to:
- ***Create React App:*** provides a streamlined setup for project, including Webpack, Babel, ESLint, PostCSS, CSS Loader & Style Loader
- ***React.js:*** the core library for building user interface
- ***React DOM:*** handles DOM-specific methods, including rendering React elements into the DOM
- ***React Spring:*** enables smooth and interactive animations
- ***React Router (including BrowserRouter, Route, Switch, and NavLink for navigation):*** supports routing, facilitates navigation and URL handling
- ***Redux (utilizing actions, reducers, and middleware for asynchronous operations):*** provides a predictable state container and enables the management of complex application states 
- ***Redux-Saga:*** enables handling side effects in Redux, enhancing asynchronous operations
- ***Redux-Toolkit (set of tools for efficient Redux development):*** simplifies common Redux patterns and provides tools
- ***Immer library in Redux:*** simplifies the creation of immutable data structures, used to manage state immutability
- ***Axios:*** a promise-based HTTP client for making asynchronous requests
- ***Styled components:*** styling components with tagged template literals, offers a dynamic and limited approach to styling

### Technologies and Tools
Other technologies and tools used in this project include, but are not limited to:
- ***JSX (JavaScript XML):*** syntax extension for JS to describe what the UI should look like
- ***CSS Flexbox:*** design of complex web layout 
- ***CSS Grid:*** create complex grid-based layouts
- ***JavaScript ES6+ Features:*** arrow functions, template literals, let and const declarations, destructuring assignment, promises etc.
- ***Media Queries:*** different styles for different devices and screen sizes
- ***Custom Hooks:*** reusable pieces of logic that are shared by multiple components
- ***JavaScript generator functions:*** pause and resume functions, providing a mechanism for powerful asynchronous programming 
- ***URL-related features:*** like URLSearchParams, useLocation, useHistory, React Router and React Hooks for working with and manipulating the browser's URL
- ***Async/Await:*** handling asynchronous operations 
- ***API Integration:*** incorporating external API - The Movie Database API, to source data for the application

### Build and Deployment
- npm | Node Package Manager(for managing project dependencies and providing scripts for common tasks)
- Webpack (for bundling)
- Babel (for JavaScript transpilation)
- ESLint (for code linting)
- PostCSS (for processing CSS)
- CSS Loader & Style Loader (for handling CSS in the build process)

Feel free to explore the demo and join us on this exciting journey of building the Movies Browser! If you have any questions or suggestions, don't hesitate to reach out. Thank you for your interest and support!

## Available Scripts
In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run deploy`
This script is available for deployment and is responsible for deploying the app to GitHub Pages. Use it to showcase your project to the world!

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Cloning and Setting Up API Access
Thank you for your interest in our Movies Browser project! To begin working with the codebase, follow the steps outlined below. Please note that the following instructions are applicable when cloning our repository.

### Prerequisites
Before you start, ensure that you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Cloning the Repository
```bash
git clone https://github.com/bedicooper/movies-browser.git
cd movies-browser
```

### API Key Setup (Applicable only when cloning the repository)
Our application relies on The Movie Database (TMDb) API to fetch movie and actor information. Follow these steps to set up your API key:

1. Visit the [TMDb website](https://www.themoviedb.org/) and create an account.
2. Once logged in, navigate to the [API section](https://www.themoviedb.org/settings/api) in your account settings.
3. Generate a new API key.

### Updating the API Key in the Code
To integrate your API key with the codebase, follow these steps:
1. Open the project in your preferred code editor.
2. Locate the `apiKey.js` file in the `src/utils` directory.
3. Replace the exported string with your TMDb API key.

```javascript
// src/utils/apiKey.js

export default "YOUR_API_KEY"; // Replace with your TMDb API key
```

### Running the Application
Now that you have your API key configured, you can run the application locally:
```bash
npm install
npm start
```
Open http://localhost:3000 in your browser to view the app.

Feel free to explore your customized version of the application, and if you have any questions or feedback, don't hesitate to reach out. Happy coding! 