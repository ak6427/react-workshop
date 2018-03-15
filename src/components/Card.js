import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    background: silver;
`;

const Image = styled.img`
    max width: 100%
`;



export default class Card extends React.Component {
    render() {
        return (
            <CardWrapper>
                <h1>{this.props.title}</h1>
                <Image src={this.props.imageUrl}/>
            </CardWrapper>
        )
    }
};