import React, {Component} from 'react';
import './SearchResult.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import SearchBar from '../components/SearchBar.js';
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

class SearchResult extends Component {
    render() {
        return (
            <div id="searchresult">
                <div id="topbar">
                    <SearchBar/>
                </div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
       Filters 
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                <Form.Label>Proximity</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    label="1 mi"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="2 mi"
                                />
                                <Form.Check 
                                    type="checkbox"
                                    label="5 mi"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="10 mi"
                                />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <div id="searchresult-deck">
                    <CardDeck>
                        <Card>
                        <Card.Img variant="top"/>
                        <Card.Body>
                            <Card.Title>MIT Medical</Card.Title>
                            <Card.Text>25 Carleton St, Cambridge, MA, 02139</Card.Text>
                        </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default SearchResult;