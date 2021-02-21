import React, { Component } from "react";
import './SubmitReview.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SubmitReview extends Component {
    render() {
        return (
          <div id="submitreview">
            <h3>Submit a Review</h3>
            <Form>
              <Form.Group>
                <Form.Label>Name of Clinic</Form.Label>
                <Form.Control placeholder="Enter clinic name" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Name of Provider</Form.Label>
                <Form.Control placeholder="Enter provider name" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Services Offered</Form.Label>
                <Form.Control as="select" multiple>
                  <option>Primary care</option>
                  <option>Gynecological care</option>
                  <option>Referrals</option>
                  <option>Hormonal treatment</option>
                  <option>Mental healthcare</option>
                  <option>Gender reassignment surgery</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Insurance Coverage</Form.Label>
                <Form.Control as="select" multiple>
                  <option>Blue Cross Blue Shield</option>
                  <option>UnitedHealth</option>
                  <option>Kaiser Foundation</option>
                  <option>Cigna Health</option>
                  <option>Other/Unlisted</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Positive Characteristics</Form.Label>
                <Form.Control as="select" multiple>
                  <option>Gender inclusive language</option>
                  <option>Non-cis staff available</option>
                  <option>Other non-cis patients present</option>
                  <option>Asked for pronouns and name</option>
                </Form.Control>
              </Form.Group>
              
              <Form.Group>
                <Form.Label>Negative Characteristics</Form.Label>
                <Form.Control as="select" multiple>
                  <option>Purposefully misgendered</option>
                  <option>Deadnamed</option>
                  <option>No experience or history with noncis patients</option>
                  <option>Not LGTBQ+ friendly</option>
                  <option>Direct aggression or bigotry</option>
                  <option>Indirect aggression or bigotry</option>
                </Form.Control>
              </Form.Group>
              <Button variant="outline-success" >Submit</Button>
            </Form>
          </div>
        )
    }
}

export default SubmitReview;