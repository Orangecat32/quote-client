export const IEX_HIST_REQUEST = 'IEX_HIST_REQUEST';
export const IEX_HIST_FAIL = 'IEX_HIST_FAIL';
export const IEX_HIST_SUCCESS = 'IEX_HIST_SUCCESS';

export const requestHistory = (symbol) => ({ type: IEX_HIST_REQUEST, payload: symbol });
