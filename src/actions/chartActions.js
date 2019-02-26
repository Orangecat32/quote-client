export const CHART_SORT_MODE = 'CHART_SORT_MODE';
export const CHART_VIEW_MODE = 'CHART_VIEW_MODE';

export const chartSortMode = (m) => ({ type: CHART_SORT_MODE, payload: m });
export const chartViewMode = (v) => ({ type: CHART_VIEW_MODE, payload: v });
