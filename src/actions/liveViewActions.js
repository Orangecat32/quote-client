
export const LIVE_VIEW_SETTINGS = 'LIVE_VIEW_SETTINGS';


export const LIVE_VIEW_RESTORE_DEFAULT = 'LIVE_VIEW_RESTORE_DEFAULT';
export const LIVE_VIEW_TOGGLE_ACTIVE = 'LIVE_VIEW_TOGGLE_ACTIVE';

export const LIVE_VIEW_VIEW_MODE = 'LIVE_VIEW_VIEW_MODE';
export const LIVE_VIEW_GET_INDEX = 'LIVE_VIEW_GET_INDEX';



export const changeSettings = () => ({type: LIVE_VIEW_SETTINGS});
export const restoreDefault = () => ({type: LIVE_VIEW_RESTORE_DEFAULT});
export const liveViewMode = (v) => ({type: LIVE_VIEW_VIEW_MODE, payload: v});


