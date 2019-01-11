import React from 'react';


export const iconNames = ['time', 'grid', 'wrench','cog', 'flag','star','airplane','key','globe','dollar','flash','heart'];
export const ICON_COUNT = 12; 

export function gameDescription() {
    return (
      <div style={{wrap:'breakWord'}}>
        <ul>
          <li>At the start of the game, the player is presented with 24 facedown cards.</li>
          <li>On the reverse side of every card is an icon. There are twelve unique icons.</li>
          <li>Play begins with the player clicking a card to reveal the icon.</li>
          <li>The player then clicks another card to reveal a second icon.</li>
          <li>If the icons match, the matched cards are grayed.</li>
          <li>If the icons do not match, the cards are turned facedown.</li>
          <li>The game continues until there are no cards left to match.</li>
          <li>{`Alternatively, play can begin with the cards faceup (using the "Show All" switch) then turning them facedown after you have memorized the icon positions. `}</li>
          <li>The object of the game is to match all the icons using the fewest clicks possible.</li>
        </ul>
      </div>);
  }
  
  