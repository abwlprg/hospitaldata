import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Layout from './Layout';

export default function LoadCreateHospital(props) {
    return (
        <Jumbotron>
        <Card>
            <Card.Header as = 'h4'> Create a Hospital </Card.Header>

            <Card.Body> <Layout/> </Card.Body>        
        </Card>
        </Jumbotron>
    );
}