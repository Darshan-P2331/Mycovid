import React, {Component} from 'react'
import firebase from './firebase'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'


class LogIn extends Component {
    constructor() {
        super()
        this.db = firebase.database()
        this.state = {
            gender: '',
            id: '',
            pregnant: 'false',
            diabetics: 'false',
            age: '',
            heart: 'false',
            insurance: 'false',
            respiratory: 'false',
            aarogya: 'false',
            aayushmaan: 'false',
            kidney: 'false'

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()

        console.log(
            this.state
            )
    }

    render() {
        return (
            <Container>
                <Form style={{maxWidth: "550px"}} onSubmit={this.handleSubmit}>
                    <Form.Control type="text" placeholder="ID" />
                    <Form.Control type="number" placeholder="Age" />
                    <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Gender:&nbsp;
                        </Form.Label>
                        <Col sm={10}>
                                <Form.Check type="radio" label="Male" value="Male" name="sex" onChange={e => this.setState({gender: e.target.value})}  />
                                <Form.Check type="radio" label="Female" value="Female" name="sex" onChange={e => this.setState({gender: e.target.value})} />
                                <Form.Check type="radio" label="Others" value="Others" name="sex" onChange={e => this.setState({gender: e.target.value})}  />
                        </Col>
                            
                    </Form.Group>
                    </fieldset>
                    <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Select appropriate
                        </Form.Label>
                        <Col sm={10} px-5>
                            <Form.Check type="checkbox" label="Kidney Disorders" value="true" />
                            <Form.Check type="checkbox" label="Diabetics" value="true" />
                                <Form.Check type="checkbox" label="Heart Disorders" value="true" onChange={e => this.setState({heart: e.target.value})} />
                            <Form.Check type="checkbox" label="Respiratory" value="true" />
                            {
                                    this.state.gender === 'Female' ? <Form.Check type="checkbox" label="Pregnant" value="true" onChange={e => this.setState({pregnant: e.target.value})} /> : <br/>
                            }
                            
                        </Col>
                    </Form.Group>
                    </fieldset>
                    <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Select appropriate
                        </Form.Label>
                        <Col sm={10} px-5>
                            <Form.Check type="checkbox" label="Aayushmaan Bharath" value="true" />
                            <Form.Check type="checkbox" label="Arogya Karnataka" value="true" />
                            <Form.Check type="checkbox" label="Insurance" value="true" />
                        </Col>
                            
                    </Form.Group>
                    </fieldset>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
} 

export default LogIn