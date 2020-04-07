import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({text}) => {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
                <Typography gutterBottom>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

    const styles = {
        cardContainer:{
            height:50,
            marginBottom:7
        }

};

export default TrelloCard;