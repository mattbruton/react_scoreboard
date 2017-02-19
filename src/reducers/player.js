import * as PlayerActionTypes from '../actiontypes/player';

const currentDate = new Date;
const month = currentDate.getMonth() + 1;
const day = currentDate.getDay();
const year = currentDate.getFullYear();

const initialState = {
    players: [
        {
            name: "Lunchbox",
            score: 25,
            created: "02/10/2017",
            updated: "02/17/2017"
        }, {
            name: "Ziggy",
            score: 24,
            created: "02/10/2017",
            updated: "02/17/2017"
        }, {
            name: "Hemingway",
            score: 55,
            created: "02/11/2017",
            updated: "02/17/2017"
        }
    ],
    selectedPlayerIndex: -1
}
export default function Player(state=initialState, action) {
    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return [
                ...state,
                {
                    name: action.name,
                    score: 0,
                    created: `${month}/${day}/${year}`
                }
            ];

        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return state.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score
                    };
                }
                return player;
            });
        
        case PlayerActionTypes.SELECT_PLAYER:
            return 

        default:
            return state;
    }
}