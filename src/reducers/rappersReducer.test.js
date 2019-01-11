import {filteredArtistsEx, allArtists, getSortMode, getFilters} from './rappersReducer';
import {initialState} from '../store';
import { SORT_NAME_DEC, SORT_NAME_ASC,  SORT_AGE_DEC, SORT_AGE_ASC } from '../components/Rappers/constants';

import data from '../mock/rappers.json'


expect.extend({
  firstIdValue(items, id) {
    return (items || []).length > 0 && items[0].id === id
      ? {pass: true, message: () => `correct id`}
      : {pass: false, message: () => `incorrect id` };
  }
});

expect.extend({
  firstName(items, name) {
    return (items || []).length > 0 && items[0].name === name
      ? {pass: true, message: () => `correct name`}
      : {pass: false, message: () => `incorrect name` };
  }
});


describe('reducer tests', () => {
  let store = initialState;
  store.rappers.data = data.rappers; 
  const artists = allArtists(store);
 

  test('initial load', () => {
    expect(filteredArtistsEx(artists, getFilters(store), getSortMode(store))).firstIdValue(3);
  });

  test('active acending name test', () => {
    store.rappers.sortMode = SORT_NAME_ASC;
    store.rappers.showActive = true;
    expect(filteredArtistsEx(artists, getFilters(store), getSortMode(store))).firstIdValue(7);
  });

  test('active decending name test', () => {
    store.rappers.sortMode = SORT_NAME_DEC;
    store.rappers.showActive = true;
    expect(filteredArtistsEx(artists, getFilters(store), getSortMode(store))).firstIdValue(3);
  });

  test('acending name', () => {
    store.rappers.sortMode = SORT_NAME_ASC;
    store.rappers.showActive = false;
    expect(filteredArtistsEx(artists, getFilters(store), getSortMode(store))).firstName('xxxtentacion');
  });
});

