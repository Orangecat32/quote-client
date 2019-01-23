import moment from 'moment';
import {isValidDate} from '../../shared/utils';
import { SORT_NAME_DEC, SORT_NAME_ASC,  SORT_AGE_DEC, SORT_AGE_ASC } from './constants';

// return false for inactive artist, if filter is false
export const activeFilter = (f, isArtistActive) => !(isArtistActive === false && f === true);

export const sortArtists = (a, b, sortMode) => {
  switch(sortMode) {
    case SORT_NAME_DEC:
      return a.name.localeCompare(b.name);
    case SORT_NAME_ASC:
      return -(a.name.localeCompare(b.name));
    case SORT_AGE_DEC:
      return a.birthDate === b.birthDate ? 0 : a.birthDate < b.birthDate ? -1 : 1;
    case SORT_AGE_ASC:
      return a.birthDate === b.birthDate ? 0 : a.birthDate > b.birthDate ? -1 : 1;
    default:
      return 0;
  }
};

export const ageDisplay = (birthdate) => 
  (isValidDate(birthdate) ? `${moment().diff(birthdate, 'years')}` : `?`);



