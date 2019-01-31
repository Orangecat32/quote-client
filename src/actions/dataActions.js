//import {requestUpdates} from '../api/liveApi';

export const DATA_REFRESH = 'DATA_REFRESH';
export const DATA_CONNECT = 'DATA_CONNECT';
export const DATA_END = 'DATA_END';
export const DATA_SUBSCRIBE_FAILED = 'DATA_SUBSCRIBE_FAILED';
export const DATA_SUBSCRIBE_SUCCESS = 'DATA_SUBSCRIBE_SUCCESS';
export const DATA_SUBSCRIBE_UPDATE = 'DATA_SUBSCRIBE_UPDATE';
export const DATA_LOGIN = 'DATA_LOGIN';
export const DATA_ERROR = 'DATA_ERROR';
export const DATA_UPDATE = 'DATA_UPDATE';
export const DATA_PORTFOLIO_REQUEST = 'DATA_PORTFOLIO_REQUEST';
export const DATA_PORTFOLIO_SUCCESS = 'DATA_PORTFOLIO_SUCCESS';
export const DATA_PORTFOLIO_FAILED = 'DATA_PORTFOLIO_FAILED';

export const refreshPortfolio = () => ({type: DATA_REFRESH});
export const connect = () => ({type: DATA_CONNECT});
export const disconnect = () => ({type: DATA_END});
export const update = (data) => ({type: DATA_UPDATE, payload: data});
export const getPortfolio = () => ({type: DATA_PORTFOLIO_REQUEST});
export const login = () => ({type: DATA_LOGIN});
export const errorOccured = (message) => ({type: DATA_ERROR, payload: message});

