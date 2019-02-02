
export const TABLE_VIEW_SETTINGS = 'TABLE_VIEW_SETTINGS';
export const TABLE_VIEW_RESTORE_DEFAULT = 'TABLE_VIEW_RESTORE_DEFAULT';
export const TABLE_VIEW_VIEW_MODE = 'TABLE_VIEW_VIEW_MODE';
export const TABLE_VIEW_GET_INDEX = 'TABLE_VIEW_GET_INDEX';


export const changeSettings = () => ({type: TABLE_VIEW_SETTINGS});
export const restoreDefault = () => ({type: TABLE_VIEW_RESTORE_DEFAULT});
export const tableViewMode = (v) => ({type: TABLE_VIEW_VIEW_MODE, payload: v});


