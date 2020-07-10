import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";

class RightPaneComponent extends React.Component {
    constructor(props) {
        super(props);
        this.updateValues = this.updateValues.bind(this);
        this.handleFileChange = this.handleFileChange(this);
        this.state = {
            questioName: "",
            op1: "",
            op2: "",
            op3: "",
            op4: "",
            file : ""
        }
    }

    componentDidUpdate(prevProps) {
        let arr = this.props.sr.arr;
        let idx = this.props.sr.clickedIndex;
        console.log(idx);

        if (idx != prevProps.sr.clickedIndex && idx > -1) {
            this.setState({
                questioName: arr[idx].Question,
                op1: arr[idx].option1,
                op2: arr[idx].option2,
                op3: arr[idx].option3,
                op4: arr[idx].option4
            });

        }
    }

    updateValues(e) {
        let idx = this.props.sr.clickedIndex;
        let obj = this.props.sr.arr[idx];
        if (e.target.name === "question") {
            obj.Question = e.target.value;
            this.setState({
                questioName: e.target.value,
                op1: this.state.op1,
                op2: this.state.op2,
                op3: this.state.op3,
                op4: this.state.op4
            });
        }
        if (e.target.name === "op1") {
            obj.option1 = e.target.value;
            this.setState({
                questioName: this.state.questioName,
                op1: e.target.value,
                op2: this.state.op2,
                op3: this.state.op3,
                op4: this.state.op4
            })
        }
        if (e.target.name === "op2") {
            obj.option2 = e.target.value;
            this.setState({
                questioName: this.state.questioName,
                op1: this.state.op1,
                op2: e.target.value,
                op3: this.state.op3,
                op4: this.state.op4
            })
        }
        if (e.target.name === "op3") {
            obj.option3 = e.target.value;
            this.setState({
                questioName: this.state.questioName,
                op1: this.state.op1,
                op2: this.state.op2,
                op3: e.target.value,
                op4: this.state.op4
            })
        }
        if (e.target.name === "op4") {
            obj.option4 = e.target.value;
            this.setState({
                questioName: this.state.questioName,
                op1: this.state.op1,
                op2: this.state.op2,
                op3: this.state.op3,
                op4: e.target.value
            })
        }
    }

    handleFileChange(e){
        

    }

    render() {

        let arr = this.props.sr.arr;
        let idx = this.props.sr.clickedIndex;
        console.log(idx);

        return (

            <div class="RightPane">
                <h5>Design Question -  {this.props.sr && this.props.sr.clickedIndex > -1 ? this.props.sr.clickedIndex : ""}</h5>
                <Form.Group as={Row} controlId="qtzn" style={{ marginTop: '15%' }}>
                    <Form.Label column sm="4">
                        Question:
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control size="sm" value={this.state.questioName} name="question" onChange={this.updateValues} type="text" placeholder={idx > -1 ? arr[idx].Question : "Small text"} />
                    </Col>
                </Form.Group>

                {/* <Form.File id="formcheck-api-regular">
                    <Form.File.Input value={this.state.file}  onChange={(e) => this.handleFileChange} style={{ marginTop: '5px', marginLeft: '40%' }}  text="ADD IMAGE" variant="primary"/>
                </Form.File> */}

                <Button style={{ marginTop: '5px', marginLeft: '50px' }} variant="primary">ADD IMAGE</Button>

                <Form.Group as={Row} controlId="op1" style={{ marginTop: '15%' }}>
                    <Form.Label column sm="4">
                        Option 1:
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control size="sm" type="text" value={this.state.op1} name="op1" onChange={this.updateValues} placeholder={idx > -1 ? arr[idx].option1 : "Small text"} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="op2">
                    <Form.Label column sm="4">
                        Option 1:
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control size="sm" type="text" value={this.state.op2} name="op2" onChange={this.updateValues} placeholder={idx > -1 ? arr[idx].option2 : "Small text"} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="op3">
                    <Form.Label column sm="4">
                        Option 3:
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control size="sm" type="text" value={this.state.op3} name="op3" onChange={this.updateValues} placeholder={idx > -1 ? arr[idx].option3 : "Small text"} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="op4">
                    <Form.Label column sm="4">
                        Option 4:
                    </Form.Label>
                    <Col md="8">
                        <Form.Control size="sm" type="text" name="op4" value={this.state.op4} onChange={this.updateValues} placeholder={idx > -1 ? arr[idx].option4 : "Small text"} />
                    </Col>
                </Form.Group>
                <Button style={{ marginTop: '10px' }} variant="primary">ADD</Button>{' '}&nbsp;&nbsp;&nbsp;
                <Button style={{ marginTop: '10px' }} variant="primary">DELETE</Button>{' '}
            </div>

        )
    }
}

function mapStateToProps(state) {
    const sr = state.sr;
    console.log({ sr });
    return {
        sr
    };
}

export default connect(mapStateToProps)(RightPaneComponent)