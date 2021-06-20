Elevator project

At the start of the project it can be see a building with 2 elevators and 7 floors.
There is also 2 bars with floor numbers, which are assigned to the appropriate elevators (A and B).
In the 3rd column in the building it can be see UP and DOWN arrows which are responsible for
calling the elevators to the right destination.
By clicking on any of these arrows, the nearest elevator will be appear on that floor.
If the distance is equal between the elevators and the destination, the lift from the lower floor comes up.
By clicking on floor numbers, the appropriate elevator will come up or go down to the assigned floor.
Above the arrows on each floor, it is displayed which elevator is moving. Besides that, on the top of the
building is appearing the elevator's current state.

In "ElevatorComponent" class it's created the floor numbers and there is stored the current state of elevators
(currentFloor). In the "retrieveCurrentFloor" function it's sent the "currentFloor" to the Buliding class.

In "Building" class it's created the building and all of its components. In the "floorDataA" and "floorDataB"
functions are moved the elevators by floor numbers, and in the "onClick" are moved by arrows. In the last one
is written the decision, which elevator is going up/down at the same distance.