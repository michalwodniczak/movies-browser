# **MOVIES BROWSER**

Welcome to our Movies Browser project! We're excited to have you here at the early stages of our app development journey. Be sure to check back soon as we continue to enhance and refine the experience.

## Demo
Explore our current progress on the live demo: https://bedicooper.github.io/movies-browser/

<img src="./readme_imgPopularMovies.png" alt="Demo" width="500">

## Authors
- [Patrycja Gomza](https://github.com/patrycja-gomza)
- [Michał Wodniczak](https://github.com/widmo200)
- [Mateusz Bednarz](https://github.com/bedicooper)

## General Info
### Overview
Movies Browser is a web application developed in collaboration with the YouCode online school. Our teamwork is organized using Scrum, and we manage tasks through Trello. For design, we utilize Figma, and data for the app is sourced from The Movie Database API.

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

### What We Are Working On
- **No Results Page:** We are actively developing a dedicated page for instances where search queries yield no results. This feature aims to provide users with a clear and informative page, guiding them effectively when their search doesn't match any records.
- **Search Functionality:** Utilize the input for searching movies based on query parameters.

Our ongoing efforts focus on refining every aspect of your interaction with our application, making it not only functional but also aesthetically enjoyable. Watch out for these exciting updates in the near future! 🚀

### Development Workflow
#### Project Bootstrapping 🚧
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

#### State Management 🔄
Leveraging Redux for state management, including middleware for asynchronous operations.

#### Styling 💅
Utilizing JSX, Flexbox, CSS Grid, and Styled Components for an appealing and responsive design.

#### Asynchronous Operations ⏳
Implementing asynchronous functionality using Axios, Async/Await, and Redux-Saga.

#### Inspiration 💡
This project draws inspiration from the "Frontend Developer from the Basics" course at the online programming school YouCode.

## Technologies
This project incorporates a variety of technologies and tools, including but not limited to:
- JSX (JavaScript XML) 
- Flexbox 
- CSS Grid
- JavaScript ES6+ Features
- React.js
- Create React App (Webpack, Babel, ESLint, PostCSS, CSS Loader & Style Loader)
- React Router (including BrowserRouter, Route, Switch, and NavLink for navigation)
- Styled components (utilization of syntax with template literals)
- Media Queries
- Immutability with the immer library in Redux (for state management)
- Custom Hooks
- Local Storage with Redux-Saga
- Redux (utilizing actions, reducers, and middleware for asynchronous operations) 
- JavaScript generator functions (pause and resume functions), providing a mechanism for powerful asynchronous programming 
- URL-related features like URLSearchParams, useLocation, useHistory: React Router and React Hooks for working with and manipulating the browser's URL
- Axios
- Async/Await
- API Integration

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