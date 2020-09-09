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
                const { general, oxygen, ventilator } = data.val()
                board.push({
                    name: data.key,
                    general,
                    oxygen,
                    ventilator
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
                            <Card>
                                <Card.Title className="mr-auto p-3">
                                    {data.name}
                            </Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col md={6} style={{ paddingLeft: '40px' }} >
                                            General Beds
                                </Col>
                                        <Col md={6} style={{ textAlign: 'right', paddingRight: '40px' }}>
                                            {data.general}
                                </Col>
                                        <Col md={6} style={{ paddingLeft: '40px' }} >
                                            Beds with Oxygen
                                </Col>
                                        <Col md={6} style={{ textAlign: 'right', paddingRight: '40px' }}>
                                            {data.oxygen}
                                </Col>
                                        <Col md={6} style={{ paddingLeft: '40px' }} >
                                            Beds with ventilator
                                </Col>
                                        <Col md={6} style={{ textAlign: 'right', paddingRight: '40px' }}>
                                            {data.ventilator}
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