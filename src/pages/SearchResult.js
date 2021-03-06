import React, {Component} from 'react';
import './SearchResult.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import SearchBar from '../components/SearchBar.js';
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import MITMed from "../mit_medical.jpg";
import BMC from "../bmc.jpg";
import FenwayHealth from "../fenwayhealth.jpg";
class SearchResult extends Component {
    render() {
        return (
            <div id="searchresult">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="sticky2">
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
                                <Form.Group>
                                    <Form.Label>Services Offered</Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        label="therapy"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="general medicine"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="gender reassignment surgery"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="hormone replacement therapy"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        label="1+ stars"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="2+ stars"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="3+ stars"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="4+ stars"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="5 stars"
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                </div>
                <div id="searchresult-deck">
                    <CardDeck>
                        <Card>
                        <Card.Img src={MITMed} variant="top"/>
                        <Card.Body>
                            <Card.Title>MIT Medical</Card.Title>
                            <Card.Text>25 Carleton St, Cambridge, MA, 02139
                                <br/>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <br/>
                                <i>"A pretty long waiting process which is frustrating.
                                    Asked for my name and pronouns at the beginning so I was..."
                                </i>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card>
                        <Card.Img src={BMC} variant="top"/>
                        <Card.Body>
                            <Card.Title>Boston Medical Center</Card.Title>
                            <Card.Text>One Boston Medical Center Pl, Boston, MA, 02118
                                <br/>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <br/>
                                <i>"Friendly staff and did a good job of answering my questions!"
                                </i>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card>
                        <Card.Img src={FenwayHealth} variant="top"/>
                        <Card.Body>
                            <Card.Title>Fenway Health</Card.Title>
                            <Card.Text>1340 Boylston St, Boston, MA, 02215
                                <br/>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <br/>
                                <i>"First time at a clinic after bad experiences with my last one.
                                    Definitely made me feel safe returning to a..."
                                </i>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card>
                        <Card.Img src={MITMed} variant="top"/>
                        <Card.Body>
                            <Card.Title>Bad Practice</Card.Title>
                            <Card.Text>123 Bad Ln, Boston, MA, 02118
                                <br/>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <br/>
                                <i>"A pretty long waiting process which is frustrating.
                                    Asked for my name and pronouns at the beginning so I was..."
                                </i>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default SearchResult;