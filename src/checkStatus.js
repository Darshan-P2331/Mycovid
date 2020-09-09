import React, { Component } from 'react'
import {db} from './firebase'
import { Container, Form, Button } from 'react-bootstrap'

class CheckStatus extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            status: 'Loading...'
        }
    }
    checkstatus() {
        const ref = db.ref('Member').child(this.state.id)
        ref.once("value", snap => {
            this.setState({
                state: snap.val().status
            })
            console.log(snap.val())
        }, err => {
                console.log(err)
        })
    }
    render() {
        return (
            <Container className="justify-content-center d-flex py-5">
                <div className="d-flex flex-column">
                <Form onSubmit={this.checkstatus} >
                    <Form.Control type="text" value={this.state.id} placeholder="ID" style={{ marginBottom: '20px' }} onChange={e => this.setState({id: e.target.value})} />

                    <Button type="submit" >Check Status</Button>
                </Form>
                <br/>
                <br/>
                <br/>
                <h1>{this.state.status + this.state.id} </h1>
                </div>
            </Container>
        )
    }
}

export default CheckStatus