# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Requirements

1. [x] You must make a single page application (only one index.html file) using `create-react-app`.
2. [ ] Your app should use `at least 3 components` in a way that keeps your code well organized.
3. [ ] There should be `at least 2 client-side routes` using React RouterLinks to an external site.. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
4. [ ] Use a json-server to create a RESTful API for your backend and `make both a GET and a POST request to the json server`. Use a form to make your post request, `specifically a controlled form/component`. Additionally, you may choose to incorporate data from an external API but it is not required.

   - You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.
   - Upon return of json from your POST request, a state update by a setState function is required!

# Project Pitch

### Main idea:

This application will allow users to play a simple slot machine game.

### User story:

Users must sign up first before they can play the game. Users will start out with $100 in their wallet and can play $10 per game. Users can insert $100 money into the machine once they ran out of money.

### How will I use the concepts I recently learned to meet the project requirements?

I will use components to separate out my functions. I will need to use useState in my components.

### What area do I think will be most challenging?

I think trying to get the items to move in the machine and making it stop randomly will be a challenge.

# Stretch Goals

1. Use more components and client-side routes.
2. Add some styling: you're encouraged to write your CSS from scratch, either by using styled componentsLinks to an external site. or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React BootstrapLinks to an external site., Semantic UILinks to an external site., or Material UILinks to an external site.) if you prefer.
3. Incorporate data from an external API. Check out this list of APIsLinks to an external site. if you need some inspiration!
4. Anything else you'd like! These are only the basic requirements — you're free to explore and add on as much stuff as you'd like.
