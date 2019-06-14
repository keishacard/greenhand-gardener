This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Greenhand Gardener
## A Gardening App by Keisha Card
![image](src/components/img/greenhand-logo.jpg)

## Want to create a beautiful, functional garden but don’t know where to start? Gardening by theme makes planning a cinch. This application provides themes for fun gardens based on function: entertaining, cooking, or being a custodian of local ecology. The chosen theme will provide suggested plants, hardiness zones, and gardening tips.

### User Guide:
1. Register or log in with an email and password

2. Use the navigation bar to toggle between app features: Garden Themes, Editable User Gardens, Friends

3. Log out to end user session.

### Greenhand Gardener Features:

1. Garden Themes: The main dashboard after login features several prebuilt garden themes to explore and an option to build a garden independently from scratch. Select a garden theme to explore plants and tips.

2. User Gardens: Save the garden to reference later or edit to preferences or hardiness zone. Gardens can be removed from user's gardens.

3. Friends: View the gardens of friends using the app to stay inspired!

![image](src/components/img/reenhand-DBdiagram.png)

### How To Download & Run Greenhand Gardener:

1. Choose or create a local directory to store Greenhand Gardener in & clone this repository into it

2. Install dependencies using `npm install`

3. Install json-server globally from npm

4. From root directory run `json-server -p 5002 api/greenhand.json`

4. Run `npm start` and open http://localhost:3000 to view Greenhand Gardener in the browser. The page will automatically reload if changes are made to the code and build errors and lint warnings occur in the console as code is written.