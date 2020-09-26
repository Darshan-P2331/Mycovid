import React, { Component } from 'react';
import { Container, Col, Card, Row, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { db } from './firebase';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: {},
            Bed: 'Beds Available',
            Beds: 'Beds Occupied'
        }
    }

    componentDidMount() {
        var dbref = db.ref('Tracker')
        dbref.on("value", snapshot => {
            console.log(snapshot.val())
            this.setState({
                data: snapshot.val()
            })
            console.log(this.state.data)
        }, function (errObject) {
                console.log(errObject.code)
        })
    }
    render() {
            return (
            <div className="App">
                
                <main>
                    <Container>
                        <Row>
                            <div className='col-md-6'>
                            <Col>
                                    <Card className="m-3 text-warning" style={{ backgroundColor: '#62aaf7cc' }}>
                                    <Card.Title className="mr-auto m-3">Total Cases</Card.Title>
                                    <div className="ml-auto">
                                        <Col>
                                            <h2>{this.state.data.Confirmed} </h2>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                    <Card className="m-3" style={{ backgroundColor: '#62aaf7cc' }}>
                                    <Card.Title className="mr-auto m-3">Active Cases</Card.Title>
                                    <div className="ml-auto">
                                        <Col>
                                            <h2>{this.state.data.Active} </h2>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                    <Card className="m-3" style={{ color: 'green', backgroundColor: '#62aaf7cc' }}>
                                    <Card.Title className="mr-auto m-3">Total Recovered</Card.Title>
                                    <div className="ml-auto">
                                        <Col>
                                            <h2>{this.state.data.Recovered} </h2>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                    <Card className="m-3 text-danger" style={{ backgroundColor: '#62aaf7cc' }}>
                                    <Card.Title className="mr-auto m-3">Total Death</Card.Title>
                                    <div className="ml-auto text-align-right">
                                        <Col>
                                            <h2>{this.state.data.Deaths} </h2>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                        <div className='col-md-6'>
                            <Col>
                                <Card className="m-3" style={{ backgroundColor: '#62aaf7cc' }}>
                                    <Row>
                                    <Image height='96px' style={{ margin: '5px 8rem 5px 20px'}} src='./bed_empty.png' alt='' />
                                    <div className="ml-5 text-align-right">
                                        <Card.Title>Beds Available</Card.Title>
                                        <Col>
                                            <h2>{this.state.data.['Beds Available']} </h2>
                                        </Col>
                                    </div>
                                    </Row>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="m-3" style={{ backgroundColor: '#62aaf7cc' }}>
                                    <Row>
                                        <Image height='96px' style={{margin: '5px 8rem 5px 20px'}} src='./bed_occupied.png' alt='' />
                                    <div className="ml-5 text-align-right">
                                        <Card.Title>Beds Occupied</Card.Title>
                                        <Col>
                                            <h2>{this.state.data.['Beds Occupied']} </h2>
                                        </Col>
                                    </div>
                                    </Row>
                                </Card>
                            </Col>

                        </div>
                        </Row>
                    </Container>
                </main>
            </div>
        )
    }
}

export default Home;
