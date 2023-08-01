import React from "react";
import ChildComponent from "./ChildComponent";
import AddcComponent from "./AddComponent"

/*
  JSX : tra ve duy nhat 1 phan tu html
  state:  
*/
class MyComponent extends React.Component {
    state = {
        name: "",
        arrjob: [
            { id: 'abcjob1', title: 'dev', salary: '500' },
            { id: 'abcjob2', title: 'tes', salary: '300' },
            { id: 'abcjob3', title: 'ba', salary: '600' }

        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrjob: [...this.state.arrjob, job]
        })

    }

    render() {
        // let name = 'An'
        return (
            <>
                <AddcComponent
                    addNewJob={this.addNewJob} />
                <br></br>
                <ChildComponent
                    name={this.state.name}
                    age={'25'}
                    arrjob={this.state.arrjob}
                />

            </>
        )
    }
}

export default MyComponent