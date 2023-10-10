# **Currency Converter**

***This project was bootstrapped with [**Create React App**](https://github.com/facebook/create-react-app).***

My first simple web application that can convert given amount of money between 9 major currencies, as well as Polish Złoty. It fetches up-to-date currency rates from public API, courtesy of *[freecurrencyapi.com](https://freecurrencyapi.com/)*.

### **Demo**

[https://bit.ly/currency-converter-app](https://bit.ly/currency-converter-app)

![screenshot](https://github.com/michal-owsiak/currency-converter/blob/main/demo.gif?raw=true)

## **Tools Used**

### **Languages**

```bash
- JavaScript (ES6+) with JSX Syntax
- CSS
- HTML
```

### **Libraries**

```bash
- React
- Axios
- Styled-Components
```

## **Installation and Usage**

To get started with this project, follow these steps:

1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to launch the development server. The app will be available at [http://localhost:3000](http://localhost:3000).

## **Deployment**

To build the app for production, use:

```bash
npm run build
```
This command creates an optimized production build in the build folder, ready for deployment.

```bash
npm run deploy
```

This command is a convenient shortcut that both builds the application (as a predeploy action) and deploys it. It's useful for quickly deploying your app to your hosting platform.

```bash
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.