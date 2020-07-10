import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPaneComponent from '../src/Components/LeftPaneComponent';
import RightPaneComponent from '../src/Components/RightPaneComponent';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <LeftPaneComponent/>
        <RightPaneComponent/>
      </section>
      )
  }

}

export default App;
