import React, { Component } from "react";
import "./SearchBar.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


class SearchBar extends Component {
    render() {
        return (
            <div id="searchbar">
                <Form>
                    <FormControl type="text" placeholder="Find" className="mr-sm-2"/>
                    <FormControl type="text" placeholder="Near" className="mr-sm-2"/>
                    <div id="searchbutton">
                        <Button href="/search" variant="outline-success">Search</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default SearchBar;