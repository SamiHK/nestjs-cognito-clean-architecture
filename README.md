# NestJS-Cognito-Clean-Architecture
 Nest.js clean code architecture with API routes protection using AWS Cognito Identity service

## The architecture of this project is derived from the following resources:
- Clean Code Nest JS: [https://betterprogramming.pub/clean-node-js-architecture-with-nestjs-and-typescript-34b9398d790f]
- AWS Cognito Integration with NestJS: [https://dev.to/fstbraz/authentication-with-aws-cognito-passport-and-nestjs-part-i-23ki]

### Installation:
- `yarn` OR `pnpm install` OR `npm i` -- `yarn` is preferred

### Prereqsite:
- Create AWS Cognito user pool with settings mentioned in [https://dev.to/fstbraz/authentication-with-aws-cognito-passport-and-nestjs-part-i-23ki]
- Create a `.env` file and paste `AWS_COGNITO_CLIENT_NAME`, `AWS_COGNITO_USER_POOL_ID`, `AWS_COGNITO_CLIENT_ID` and `AWS_COGNITO_AUTHORITY` 
- create local mongoDB database with name `hub`

### build and run
- build> `yarn build`
- start> `yarn start`


