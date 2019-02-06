
export const ONE_BILLION = 1000000000;
export const ONE_MILLION = 1000000;

// usage to sleep for two seconds: await sleep(2000);  
export const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)));

export async function sleepTest(ms, name = '') { 
    console.log(`${name} sleeping for ${ms} milliseconds`);
    await sleep(ms);
    console.log(`${name} awoke`);
}

// return array of unique numbers between 1 and length (inclusive) in random order
export const randomArray = (length) => {
    let arr = []
    while(arr.length < length){
        //  +1 here because first value in array is 1, not zero
        var randomnumber = Math.floor(Math.random()*length) + 1;
        if(arr.indexOf(randomnumber) > -1) 
          continue;
        arr[arr.length] = randomnumber;
    }
    return arr;
  }

export const isNullOrWhitespace = ( input ) => {
  if (typeof input === 'undefined' || input == null || typeof input !== 'string') return true;
  return input.replace(/\s/g, '').length < 1;
}

export const isValidDate = (d) => (d instanceof Date && !isNaN(d));

export const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
      let action = { type };
      argNames.forEach((arg, index) => {
          action[argNames[index]] = args[index]
      });
      return action
  }
};

export const fmtPercent = (n) => {
    if (n === null || n === undefined) {
        return '0.0%';
    }

    const pcSign = n >= 0 ? '+' : '';
    const pc = n ? n * 100 : 0; 
    return `${pcSign}${pc.toFixed(2)}%`; 
}



export const fmtPrice = (n) => {
    if (n === null || n === undefined) {
        return '';
    }

    return n.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
}


export const fmtMktCap = (n) => {
    if (n === null || n === undefined) {
        return '';
    }

    return (n / ONE_MILLION).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0}); 
}


export const fmtShares = (n) => (n === null || n === undefined) 
        ? ''
        : (n / ONE_MILLION).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}); 


