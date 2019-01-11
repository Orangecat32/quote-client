//import * as util from '../shared/utils';
//  might have many api routines, use seperate file

const SERVER_PORT = 3500; //  was 3000 in original example

export const makeRequest = () => (fetch(`http://localhost:${SERVER_PORT}/rappers`));


//  for testing
// export async function makeRequest(sleepTime = 1000) { 
//     await util.sleep(sleepTime);
//    // throw new Error('problem');

//     return fetch(`http://localhost:3500/rappers`);
// }


