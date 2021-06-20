import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import ElevatorComponent from './elevatorComponent';

export class Building extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movingElevator: "",
      floorsA: {'0': 'grey', '1': 'grey', '2': 'grey', '3': 'grey', '4': 'grey', '5': 'grey', '6': 'green'},
      floorsB: {'0': 'orange', '1': 'grey', '2': 'grey', '3': 'grey', '4': 'grey', '5': 'grey', '6': 'grey'}
    };
    this.floorDataA = this.floorDataA.bind(this)
    this.floorDataB = this.floorDataB.bind(this)
  }

  // moving elevator by click on different numbers in 'A' column,
  // get current state of elevator and set which one is moving
  floorDataA(floor) {
    let { floorsA } = this.state
    this.setState({ currentFloorA: floor, movingElevator: "A" });

    for (var key in floorsA) {
      if (floorsA[key] === 'green') {
        floorsA[key] = 'grey'
      }
      if (key === (6 - floor).toString()) {
        floorsA[key] = 'green'
      }
    }
  }
  
  // moving elevator by click on different numbers in 'B' column,
  // get current state of elevator and set which one is moving
  floorDataB(floor) {
    let { floorsB } = this.state
    this.setState({ currentFloorB: floor, movingElevator: "B" });

    for (var key in floorsB) {
      if (floorsB[key] === 'orange') {
        floorsB[key] = 'grey'
      }
      if (key === (6 - floor).toString()) {
        floorsB[key] = 'orange'
      }
    }
  }

  // moving elevator by click on UP/DOWN arrows,
  // get current state of elevator and set which one is moving
  onClick(floor) {
    let { floorsA, floorsB, currentFloorA, currentFloorB } = this.state
    const distA = Math.abs(currentFloorA - (6 - floor))
    const distB = Math.abs(currentFloorB - (6 - floor))

    // decide which elevator is nearer to the destination
    if (distA < distB || (distA === distB && currentFloorA < currentFloorB)) {
      this.setState({ currentFloorA: 6 - floor, movingElevator: "A" })
      for (var key1 in floorsA) {
        if (floorsA[key1] === 'green') {
          floorsA[key1] = 'grey'
        }
        if (key1 === floor) {
          floorsA[key1] = 'green'
        }
      }
    } else {
      this.setState({ currentFloorB: 6 - floor, movingElevator: "B" })
      for (var key2 in floorsB) {
        if (floorsB[key2] === 'orange') {
          floorsB[key2] = 'grey'
        }
        if (key2 === floor) {
          floorsB[key2] = 'orange'
        }
      }
    }
  }

  render() {
    const { floorsA, floorsB } = this.state
    return (
      <div>
        <div className="element">
          <Container className="element">
            <Row className="currentFloorRow">                                        
              <Col>{this.state.currentFloorA}</Col>
              <Col>{this.state.currentFloorB}</Col>
            </Row>
            { Object.keys(floorsA).map(key =>
              <Row className="row" key={ 6 - key } >
                <Col style={{backgroundColor: floorsA[key]}}/>
                <Col style={{backgroundColor: floorsB[key]}}/>
                <Col className="element2">
                  <Col className="col2">{this.state.movingElevator}</Col>
                  <ButtonGroup vertical>
                    <Button 
                      variant="secondary"
                      onClick={this.onClick.bind(this, key)}>▲
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={this.onClick.bind(this, key)}>▼
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            )}
          </Container>
        </div>
        <div className="element">
          <p>A</p>
          <ElevatorComponent 
            currentFloor={ 0 }
            retrieveCurrentFloor = { this.floorDataA }>
          </ElevatorComponent>
        </div>
        <div className="element">
          <p>B</p>
          <ElevatorComponent 
            currentFloor={ 6 } 
            retrieveCurrentFloor = { this.floorDataB }>
          </ElevatorComponent>
        </div>
      </div>
    );
  }
}

export default Building