import React from 'react';


export const iconNames = ['time', 'grid', 'wrench','cog', 'flag','star','airplane','key','globe','dollar','flash','heart'];
export const ICON_COUNT = 12; 

export function gameDescription() {
    return (
      <div style={{wrap:'breakWord'}}>
        <ul>
          <li>On the reverse side of every card is an icon. There are 24 cards and twelve unique icons.</li>
          <li>Clicking a card reveals the icon underneath.</li>
          <li>The object of the game is to match all the icons using the fewest posible clicks.</li>
          <li>If the icons match, the matched cards are grayed.</li>
          <li>If the icons do not match, the cards are turned facedown.</li>
          <li>The game continues until there are no cards left to match.</li>
        </ul>
      </div>);
  }
  
  