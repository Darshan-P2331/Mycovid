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
        this.checkstatus = this.checkstatus.bind(this)
    }

    ref = db.ref('Member')

    async checkstatus() {
        await this.ref.child(this.state.id).once("value", snap => {
            console.log(snap.val())
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