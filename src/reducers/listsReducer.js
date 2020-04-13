import {CONSTANTS} from "../actions";



let listID = 2;
let cardID = 4;

const initialState=[
    {
        title: "Last Episode",
        id:`list-${0}`,
        cards:[
            {
                id:`card-${0}`,
                text:"Create a static "
            },
            {
                id:`card-${1}`,
                text:"Chego-to eshe"
            },
        ]
    },
    {
        title: "This Episode",
        id:`list-${1}`,
        cards:[
            {
                id:`card-${2}`,
                text:"Come to grandma "
            },
            {
                id:`card-${3}`,
                text:"give feed to my dog"
            },
            {
                id:`card-${4}`,
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
                id: `list-${listID}`}
                listID +=1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD: {
            const newCard={
                text:action.payload.text,
                id:`card-${cardID}`
            };
            cardID +=1;

            const newState = state.map(list=>{
                if(list.id === action.payload.listID) {
                    return{
                        ...list,
                        cards:[...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });

            return newState;}

        case CONSTANTS.DRAG_HAPPENED:

            const{droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId} = action.payload;
            const newState=[...state];
            if(droppableIdStart === droppableIdEnd){
const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIdEnd, 0, ...card)
            }
return newState;

        default:
            return state;
    }
};

export default listsReducer;