import {createCards, randomCardArray} from '../components/MemoryGame/utils';

export const init = () => (
    { 
        showAll:false, 
        cards: createCards(randomCardArray()), 
        clickCount: 0, 
        pause: false, 
        showRules: true,
        history: [],
        autoplayMode: false
    });