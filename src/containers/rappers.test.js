import {mapStateToProps} from "./rappers";
import {initialState} from '../store';
import data from '../mock/rappers.json'



test('map state to props', () => {
  let s = initialState;
  s.rappers.data = data.rappers;
  s.rappers.searchFilter = 'no';
  expect(mapStateToProps(s).filteredArtists.length).toBe(2);
});