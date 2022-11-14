# Studio City React Client


#### Running Locally
##### run `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### run `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


##### run `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


--------------------------------------------------
#### One Time Project Setup | *React & AWS Amplify*

##### AWS CLI & IAM User Setup
1. run `npm install -g @aws-amplify/cli` to install the aws amplify cli
2. run `amplify configure` to setup project
   - `studio-city-cli-admin` for the IAM profile 


##### React Client with Amplify Setup
1. run `npx create-react-app react-client` to create react project
2. run `cd react-client` to go into the project directory
3. run `npm install aws-amplify @aws-amplify/ui-react` 
4. enter a name for the project: `reactclientamplify`
5. initialize the project with the above config? `Yes`
6. select the auth method you want to use: `AWS profile`
7. please choose the profile you want to use: `amplify init`
8. run `amplify init`

--------------------------------------------------------------------
### Amplify Services
##### Auth (AWS Cognito)
- run `amplify add auth`
- do you want to use the default authentication and security configuration? `Default Configuration`
- how do you want users to be able to sign in? `Username`
- do you want to configure advanced settings? `No, I am done.`
- run `amplify push` to deploy

##### Function (AWS Lambda)
- run `amplify add function`
- select which capability you want to add `Lambda function (serverless function)`
- provide an AWS Lambda function name `featuredcityfunction`
- choose the runtime that you want to use `NodeJS`


##### Amplify CLI Basics
- `amplify status`
- `amplify add`
- `amplify push`
- `amplify console`
- `amplify publish`
- `amplify remove {service}` to remove service from app code
- `amplify delete {service}` to delete all resources of service


##### Amplify Folder Structure
- `amplify`: code and config for amplify project
- `amplify/backend`: local code for project such as the GraphQL schema for an AppSync API, the source cdoe for any serverless functions, and infastrcture as code representing the current local status of the Amplify project
- `amplify/#current-cloud-backend`: holds the code and configurations that reflect what resources were deployed in to the cloud with your last Amplify push command. It helps the CLI differentiate between the configuration of the resources already provisioned in the cloud and what is currently in your local backend directory (which reflects your local changes).