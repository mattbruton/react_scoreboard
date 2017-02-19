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
};

export default function Player(state=initialState, action) {
    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:{
            const addPlayerList = [...state.players, {
                name: action.name,
                score: 0,
                created: `${month}/${day}/${year}`
            }];
            return {
                ...state,
                players: addPlayerList
            };
        }

        case PlayerActionTypes.REMOVE_PLAYER: {
            const removePlayerList = [    
                ...state.players.slice(0, action.index),
                ...state.players.slice(action.index + 1)
            ];
            return {
                ...state,
                players: removePlayerList
            };
        }

        case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
            const updatePlayerList = state.players.map((player,index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                        updated: `${month}/${day}/${year}`
                    };
                }
                return player;
            });
            return {
                ...state,
                players: updatePlayerList
            };
    }
           
        
        case PlayerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index
            };

        default:
            return state;
    }
}