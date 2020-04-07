import {CONSTANTS} from "../actions";

let listID = 2;
let cardID = 3;

const initialState=[
    {
        title: "Last Episode",
        id:0,
        cards:[
            {
                id:0,
                text:"Create a static "
            },
            {
                id:1,
                text:"Chego-to eshe"
            },
        ]
    },
    {
        title: "This Episode",
        id:1,
        cards:[
            {
                id:0,
                text:"Come to grandma "
            },
            {
                id:1,
                text:"give feed to my dog"
            },
            {
                id:2,
                text:"this guy has no chill"
            },
        ]
    }
];


const listsReducer=(state=initialState, action)=>{
    switch(action.type){

        case CONSTANTS.ADD_LIST:
            const newList= {
                title: action.payload,
                cards:[],
                id: listID}
                listID +=1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard={
                text:action.payload.text,
                id:cardID
            };
            cardID +=1;

            const newState = state.map(list=>{
                if(list.id === action.payload.listID) {
                    return{
                        ...list,
                        cards:[...list.cards, newCard]
                    }
                } else {
                    return list
                }
            });

            return newState;

        default:
            return state;
    }
};

export default listsReducer;