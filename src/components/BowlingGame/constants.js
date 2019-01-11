import React from 'react';

export const SPARE = 1;
export const STRIKE = 2;
export const UNMARKED = 0;
export const TENTH_FRAME = 9;
export const NINETH_FRAME = 8;

export function gameDescription() {
    return (
      <div>
        <ul>
          <li>
            <a href="https://www.bowl.com/Welcome/Welcome_Home/Keeping_Score" target="_blank" rel="noopener noreferrer">How to score</a>
          </li>
          <li>
            <a href="https://www.pba.com/Resources/Bowling101" target="_blank" rel="noopener noreferrer">Rules of bowling</a>
          </li>
        </ul>
      </div>
    );
}
