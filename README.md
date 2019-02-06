# React Market Data Client

Stock market simulation created with react, redux, redux-sagas, socket.io, ag-grid, echarts and blueprint.js

## About this repro
 - This is a work in progress, created purely for my own amusement. 

 - Framework History:
    - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
    - Webpack modified to create css modules.
    - Redux added.
    - Component layer added. Store shaped for multiple components.
    - Redux-Saga middleware added
    - ag-grid added
    - echarts added
   

- Future features: 
    - more charts
    - etc...

## Client Notes
     - client runs on port 3020
     - start the server before starting the client

## Server Notes
- server was created with node, express and socket.io
- To run the server, open a command window in the repository directory and execute 'yarn server' (or npm server)
- socket.io listening on port 8005
- REST data served by express on port 4000
  - http://localhost:4000/spx  returns S&P 500 reference info as of Jan, 2 2019
  - http://localhost:4000/sectors  returns GICS sectors of spx names

  
# Screen Shots
- 
    ![Screen Shot](/public/documentation/graph1.PNG?raw=true "Screen Shot")

-
    ![Screen Shot](/public/documentation/grid1.PNG?raw=true "Screen Shot")
