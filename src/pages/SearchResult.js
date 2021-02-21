import React, {Component} from 'react';
import './SearchResult.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import SearchBar from '../components/SearchBar.js';

class SearchResult extends Component {
    render() {
        return (
            <div id="searchresult">
                <SearchBar />
                <div id="searchresult-deck">
                    <CardDeck>
                        <Card.Img variant="top"/>
                        <Card.Body>
                            <Card.Title>MIT Medical</Card.Title>
                            <Card.Text>25 Carleton St, Cambridge, MA, 02139</Card.Text>
                        </Card.Body>
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default SearchResult;