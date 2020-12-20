import React from 'react';
import Form from 'react-bootstrap/Form';

export default class SelectFacilityType extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
            <Form.Group controlId="boroughSelect">
                <Form.Label>Borough Select</Form.Label>
                <Form.Control as="select">
                    <option value='Child Health Center'>Child Health Center</option>
                    <option value='Acute Care Hospita'>Acute Care Hospita</option>
                    <option value='Nursing Home'>Nursing Home</option>
                    <option value='Diagnostic & Treatment Center'>Queens</option>
                    <option value='statenisland'>Staten Island</option>
                </Form.Control>
            </Form.Group>
            </Form>
        );
    }
}