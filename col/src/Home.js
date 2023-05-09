import React from 'react';
import RESERVATION from './RESERVATION';
import './table.css';


class ClassroomTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            selectedClassroom: null
        };
    }

    handleReserveClick = (classroom) => {
        this.setState({
            showForm: true,
            selectedClassroom: classroom
        });
    }

    handleFormClose = () => {
        this.setState({
            showForm: false,
            selectedClassroom: null
        });
    }

    render() {
        const classrooms = [
            { name: 'A02', capacity: 160, floor: 'Parter' },
            { name: 'F206', capacity: 30, floor: 2},
            { name: 'A32', capacity: 190, floor: 3},
            {name: '402', capacity: 170, floor: 4},
            {name: '505', capacity: 60, floor: 5}
        ];

        const rows = classrooms.map((classroom, index) => (
            <tr key={index}>
                <td>{classroom.name}</td>
                <td>{classroom.capacity}</td>
                <td>{classroom.floor}</td>
                <td>
                    <button onClick={() => this.handleReserveClick(classroom)}>Reserve</button>

                    <button onClick={()=>this.handleDetailsClick(classroom)}>Details</button>
                </td>
            </tr>
        ));

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Classroom Name</th>
                        <th>Capacity</th>
                        <th>Floors</th>
                        <th>Reservation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
                {this.state.showForm &&
                    <RESERVATION
                        classroom={this.state.selectedClassroom}
                        onClose={this.handleFormClose}
                    />
                }
            </div>
        );
    }
}

export default ClassroomTable;
