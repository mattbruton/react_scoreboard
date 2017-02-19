import * as PlayerActionTypes from '../actiontypes/player';

const getCurrentDate = () => {
    const currentDate = new Date;
    let month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    if (month.length != 2)
    {
        month = "0" + month;
    }
    return `${month}/${day}/${year}`;
};

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
            score: 23,
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
                created: getCurrentDate()
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
                        updated: getCurrentDate()
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