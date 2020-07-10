import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import {questionActions}  from '../Action/Questions.Action.js'


class LeftPaneComponent extends React.Component {
    constructor(props) {
        super(props);
        this.addQuestion = this.addQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.displayQuestion = this.displayQuestion.bind(this);
        this.state = {
            val : 0,
            id : 0
        }
    }

    addQuestion(){
        let qno = this.state.val;
        let idx = this.state.id;
        this.setState({
            val : qno + 1,
            id : idx + 1
        });
        qno = this.state.val;
        idx = this.state.id;

        var qstn = new Object();
        qstn.Id = idx;
        qstn.Question= "New Question "+ qno;
        qstn.option1="option1"; 
        qstn.option2="option2"; 
        qstn.option3="option3";
        qstn.option4 = "option4"; 
        qstn.file = "";
        this.props.dispatch(questionActions.addQuestionDetails(qstn));
    }

    deleteQuestion(){
        let qno = this.state.val;
        let idx = this.state.id;
        if(qno > 0 && idx >0)
        this.setState({
            val : qno - 1,
            id : idx - 1
        });
        this.props.dispatch(questionActions.dltQuestionDetails());
    }

    displayQuestion(e){
        console.log("index of clicked:");
        console.log(e.target.getAttribute("data-index"));
        let indexValue = e.target.getAttribute("data-index");
        this.props.dispatch(questionActions.clkQuestionDetails(indexValue));

    }

    render() {
        const dt = this.props.sr.arr;
        console.log(dt[this.props.sr.arr[this.props.sr.clickedIndex]]);
        return ( 
            <div className="LeftPane">
                <h5 style={{ margin: '10px' }}>Select Your Questions</h5>
                <ul onClick={this.displayQuestion}>
                {dt && dt.map((x, index)=>{
                    return(
                    <li style={{listStyleType:'None', 
                                    cursor:'pointer', margin:'10px'}} key={index}>
                        <h6  data-index={index}>{x.Question}</h6>
                    </li>
                    )

                }) }
                </ul>
               
                <Button style={{ marginTop: '10px' }} variant="primary" onClick={this.addQuestion}>ADD</Button>{' '}&nbsp;&nbsp;&nbsp;
                <Button style={{ marginTop: '10px' }} variant="primary" onClick={this.deleteQuestion}>DELETE</Button>{' '}
            </div>
    
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    const sr = state.sr;
    console.log({ sr });
    return {
        sr
    };
}

export default connect(mapStateToProps)(LeftPaneComponent)
