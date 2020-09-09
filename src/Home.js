import React, { Component } from 'react';
import { Container, Col, Card, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { db } from './firebase';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        var dbref = db.ref('Tracker')
        dbref.on("value", snapshot => {
            this.setState({
                data: snapshot.val()
            })
        }, function (errObject) {
                console.log(errObject.code)
        })
        console.log(this.state.data)
    }
    render() {
            return (
            <div className="App">
                
                <main>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Card className="m-3 text-warning">
                                    <Card.Title className="mr-auto m-3">Total Cases</Card.Title>
                                    <div className="ml-auto">
                                        <Col>
                                            <h2>{this.state.data.Confirmed} </h2>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="m-3">
                                    <Card.Title className="mr-auto m-3">Active Cases</Card.Title>
                                    <div className="ml-auto">
                                        <Col>
                                            <h2>{this.state.data.Active} </h2>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="m-3 text-success">
                                    <Card.Title className="mr-auto m-3">Total Recovered</Card.Title>
                                    <div className="ml-auto">
                                        <Col>
                                            <h2>{this.state.data.Recovered} </h2>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="m-3 text-danger">
                                    <Card.Title className="mr-auto m-3">Total Death</Card.Title>
                                    <div className="ml-auto text-align-right">
                                        <Col>
                                            <h2>{this.state.data.Deaths} </h2>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                            
                        </Row>
                    </Container>
                </main>
            </div>
        )
    }
}

export default Home;
