import React, { Component } from 'react'
import { db } from './firebase'
import { Container, Row, Col, Card } from 'react-bootstrap'


class BedStatus extends Component {
    constructor() {
        super()
        this.state = {
            board: []
        }
    }


    componentDidMount() {
        const ref = db.ref('Hospital')
        ref.once("value", snap => {
            let board = []
            snap.forEach(function (data) {
                const { General, Oxygen, Ventilator, Location } = data.val()
                console.log(data.val())
                board.push({
                    name: data.key,
                    General,
                    Oxygen,
                    Ventilator,
                    Location
                })
            })
            console.log(board)
            this.setState({
                board
            })
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.board.map((data, index) => (
                        <Col md={6} className='pt-5'>
                            <Card style={{ backgroundColor: '#62aaf7cc'}}>
                                <Card.Title className="mr-auto p-3">
                                    {data.name}
                            </Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col md={6} style={{ paddingLeft: '40px' }} >
                                            Location
                                        </Col>
                                        <Col md={6} style={{ textAlign: 'right', paddingRight: '40px' }}>
                                            {data.Location}
                                        </Col>
                                        <Col md={6} style={{ paddingLeft: '40px' }} >
                                            General
                                        </Col>
                                        <Col md={6} style={{ textAlign: 'right', paddingRight: '40px' }}>
                                            {data.General}
                                        </Col>
                                        <Col md={6} style={{ paddingLeft: '40px' }} >
                                            Oxygen
                                </Col>
                                        <Col md={6} style={{ textAlign: 'right', paddingRight: '40px' }}>
                                            {data.Oxygen}
                                </Col>
                                        <Col md={6} style={{ paddingLeft: '40px' }} >
                                            Ventilator
                                </Col>
                                        <Col md={6} style={{ textAlign: 'right', paddingRight: '40px' }}>
                                            {data.Ventilator}
                                </Col>
                                    </Row>
                                </Card.Text>
                            </Card>
                        </Col>
                    )
                    )}
                    
                </Row>
            </Container>
        )
    }
}

export default BedStatus