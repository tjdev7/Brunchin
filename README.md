![App logo](./public/img/Brunchin_logo.png)

# Brunchin

An open source point of sale management system with a constantly expanding service platform. 

![Splash page](./public/img/Brunchin_splashpage.png)

## Why this app as created:

Brunchin was initially created as an example of an app using React state, regular expressions, core Javascript functions and seamless U.X design. But it has since evolved into a biggger project where multiple people are expected to contribute. Brunchin takes inspiration from Toast and Square's POS system and intends to offer some of it's features as an open source app which anybody can contribute and improve. 

Brunchin is currently in development and is looking for any contributors to help with the dev cycle. Please see the project resources section for more information. 

## How to use:

1. Clone repo into desired directory `git clone https://github.com/Toughee/Brunchin.git` or `gh repo clone Toughee/Brunchin`
2. Run `npm install` in your terminal to install all app node modules and dependencies
3. Run `yarn start` in your terminal to run app on http://localhost:3000/

## Testing / Linter tools used for app:

-   React Testing library, Mocha, Jest and Cypress for testing components
-   TravisCI and CircleCI for CI/CD development
-   Prettier for keeping all code formatted and organized

## Project resources:

-   [Current roadmap for app](https://github.com/Toughee/Brunchin/projects/1)
-   [Wiki page for app](https://github.com/Toughee/Brunchin/wiki)
-   [Documentation for project contributors](https://github.com/Toughee/Brunchin/tree/main/docs)

### Final Version 2 app updates:

- [ ] Finish refactoring code for all components inside app
- [ ] Add multiple test types (Unit testing, Integration testing, performance testing, usability testing, load caching, etc) for each React component
- [ ] Improve the app's UI design for a more responsive experience for mobile users
- [ ] Update app's performance and UI design for multiple browsers (Safari, Firefox, Opera, etc)
### Version 3 app updates

- [ ] Create custom menu items option for shop owners to change their menu with little hassle
- [ ] Connect app to an external database for better checkout simulation
- [ ] Improve app's responsive design
- [ ] Add touch functionalities and ARIA label options to React app
- [ ] Improve custom menu options inside app
### Completed app tasks:

- [x] Add mock checkout procedure to simulate purchases
- [x] Refactor code and cut code volume. Divide all components into reusable React components
- [x] Add modal display after checkout is done to notify users of their checkout input
- [x] Include CircleCI and Travis-CI inside project
- [x] Improve UI and UX design for app
- [x] Make app responsive for the majority of user platforms
- [x] Working checkout button for item and cart total
- [x] Make the checkout option become visible only if one item is in each item inside the menu list