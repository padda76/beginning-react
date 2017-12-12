import React from 'react';
import './GithubCard.css';
import axios from 'axios';

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
}

const Card = (props) => {
    return (
        <div className="Githubcard-container">
            <img alt={props.name} width="75" src={props.avatar_url} />
            <div className="Githubcard-textblock">
                <div className="Githubcard-name">{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

class Form extends React.Component {
    state = {userName: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({userName: ''});
            });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value})}
                    placeholder="Github username" required />
                <button type="submit">Add card</button>
            </form>
        );
    };
}

export default class GithubCard extends React.Component {
    state = {
        cards : [
            {
                avatar_url: "https://avatars1.githubusercontent.com/u/5003903?v=4",
                name: "Stephen Grider",
                company: null,
                key: 1
            },
            {
                avatar_url: "https://avatars3.githubusercontent.com/u/75209?v=4",
                name: "Samer Buna",
                company: "jsComplete.com", 
                key: 2   
            }
        ]
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}