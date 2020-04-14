import React from 'react';
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
background-color: #dfe3e6;
        borderRadius: 3px;
        width: 250px;
        padding: 4px;
        margin-right: 10px;
`;

const TrelloList = ({title, cards, listID}) => {

    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
                <ListContainer {...provided.droppableProps}
                     ref={provided.innerRef}
                >
                    <h4>{title}</h4>
                    {cards.map((card, index) => (
                        <TrelloCard key={card.id}
                                    index={index}
                                    text={card.text}
                                    id={card.id}/>
                    ))}
                    <TrelloActionButton listID={listID}/>
                    {provided.placeholder}
                </ListContainer>
            )}
        </Droppable>
    );
};


export default TrelloList;