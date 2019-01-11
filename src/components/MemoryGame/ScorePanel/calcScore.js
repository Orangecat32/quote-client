

//  this methosd is still a work in progress.  usage:  gameScore(state.memoryGame.history)
export const calcScore = (clickHistory) => {
    if(!clickHistory) {
      return undefined;
    }

    // compute how well this user performed based upon the click history
  
    let matches = [];
    for(let i = 0; i < clickHistory.length; i++) {
      if(clickHistory[i].isMatched){
        matches.push({
            name: clickHistory[i].name,
            first: clickHistory[i-1].exposedClicks.length, 
            second: clickHistory[i].exposedClicks.length,
            matchCount: matches.length
          });
      }
    }
  
    //  last match is easy
    const lastMatch =  matches.filter(m => m.matchCount === 11);  
    let remains = matches.filter(m => !lastMatch.map(p => p.name).includes(m.name));
  
    // count the lucky matches, then remove them
    const luck = remains.filter(m => m.second === 1); 
    remains = remains.filter(m => !luck.map(p => p.name).includes(m.name));
  
    // count the perfect matches, then remove them from the scoring
    const level1 = remains.filter(m => m.first <= 2 && m.second <= 2);
     // (m.second === 1 && m.first === 2) || (m.first === 1 && m.second === 2) || (m.first === 2 && m.second === 2));
    remains = remains.filter(m => !level1.map(p => p.name).includes(m.name));
  
    // count near perfect matches, then remove from scoring
    let level2 = remains.filter(m => m.second < 3 || m.first < 3);
    remains = remains.filter(m => !level2.map(p => p.name).includes(m.name));
  
    // count matches where both cards seen a few times
    const level3 = remains.filter(m => m.second <= 3 || m.first <= 3);
  
    // all the rest
    const level4 = remains = remains.filter(m => !level3.map(p => p.name).includes(m.name));
  
    // what is the most times a card was clicked?
    const maxSeen = Math.max(...matches.map(m => m.first), ...matches.map(m => m.second));
  
    // which cards were clicked the most?
    const flipCounts = matches.sort((a, b) => {
      const ma = Math.max(a.first, a.second);
      const mb = Math.max(b.first, b.second);
  
      if (ma === mb ) {
        const at = a.first + a.second;
        const bt = b.first + b.second;
        return  at === bt ? 0 : at < bt ? 1 : -1;
      }
  
      return ma < mb ? 1 : -1;
    });

  // add the final clicks to level2
    level2 = level2.concat(lastMatch);
    const result = {luck, level1, level2, level3, level4, lastMatch, maxSeen, flipCounts};
  
    return result;
  }
