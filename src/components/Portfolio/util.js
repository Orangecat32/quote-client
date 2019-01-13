import { SORT_NAME_DEC, SORT_NAME_ASC,  SORT_AGE_DEC, SORT_AGE_ASC } from './constants';

export const sortArtists = (a, b, sortMode) => {
  switch(sortMode) {
    case SORT_NAME_DEC:
      return a.symbol.localeCompare(b.symbol);
    case SORT_NAME_ASC:
      return -(a.symbol.localeCompare(b.symbol));
    case SORT_AGE_DEC:
      return a.mktCap === b.mktCap ? 0 : a.mktCap < b.mktCap ? -1 : 1;
    case SORT_AGE_ASC:
      return a.mktCap === b.mktCap ? 0 : a.mktCap > b.mktCap ? -1 : 1;
    default:
      return 0;
  }
};


