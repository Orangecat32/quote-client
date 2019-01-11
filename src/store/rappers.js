import {SORT_NAME_DEC, VIEW_CARDS} from '../components/Rappers/constants';

export const init = () => (
    { 
        error: null,
        isLoading: false,
        showActive: false,
        zodiacFilter: '',
        searchFilter: '',
        viewMode: VIEW_CARDS,
        sortMode: SORT_NAME_DEC
    });