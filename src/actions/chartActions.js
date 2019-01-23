export const CHART_BEGIN = 'CHART_BEGIN';
export const CHART_FAILED = 'CHART_FAILED';
export const CHART_SUCCESS = 'CHART_SUCCESS';
export const CHART_SORT_MODE = 'CHART_SORT_MODE';
export const CHART_SECTOR = 'CHART_SECTOR';
export const CHART_TOGGLE_ACTIVE = 'CHART_TOGGLE_ACTIVE';
export const CHART_SEARCH = 'CHART_SEARCH';
export const CHART_VIEW_MODE = 'CHART_VIEW_MODE';
export const CHART_FETCH = 'CHART_FETCH';
export const CHART_RESULT = 'CHART_RESULT';

export const ChartToggleActive = () => ({type: CHART_TOGGLE_ACTIVE});
export const ChartSortMode = (m) => ({type: CHART_SORT_MODE, payload: m});
export const ChartSearch = (s) => ({type: CHART_SEARCH, payload: s});
export const ChartViewMode = (v) => ({type: CHART_VIEW_MODE, payload: v});

export const ChartFetch = () => ({type: CHART_FETCH});
export const ChartResult = () => ({type: CHART_RESULT});

export const ChartFailed = () => ({type: CHART_FAILED});
export const refreshChart = () => ({type: CHART_FETCH});
