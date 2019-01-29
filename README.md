# Sample Quote Client

React Components for stock market simulation

## About this repro
 - This is a work in progress, created purely for my own amusement. 

 - Framework History:
    - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
    - Webpack modified to create css modules.
    - Redux added.
    - Component layer added. Store shaped for multiple components.
    - Redux-Saga middleware added
    - client runs on port 3020

- Future features: 
    - more charts
    - etc...

## Server Notes
- To run the server, open a command window in the repository directory and execute 'yarn server' (or npm server)
- socket.io listening on port 8005
- REST data served by express on port 4000
  - http://localhost:4000/spx  returns S&P 500 reference info as of Jan, 2 2019
  - http://localhost:4000/sectors  returns GICS sectors of spx names
