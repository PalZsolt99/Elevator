import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';

export class ElevatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFloor: props.currentFloor,
      floorButtons: [0, 1, 2, 3, 4, 5, 6]
    };
  }

  // retrieve the current state of elevator
  componentDidMount() {
    this.props.retrieveCurrentFloor(this.state.currentFloor)
  }

  render() {
    const { floorButtons } = this.state
    return (
      <ButtonGroup vertical>
        { floorButtons.map(fButton =>
          <Button
            className="button"
            variant="primary"
            onClick={() => {
              this.props.retrieveCurrentFloor(fButton);
              this.setState({currentFloor: fButton});
            }}
            key={fButton}>{fButton}
          </Button>
        )}
      </ButtonGroup>
    );
  }
}

export default ElevatorComponent
