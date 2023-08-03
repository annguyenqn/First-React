import React from "react";
import ChildComponent from "./ChildComponent";
import AddcComponent from "./AddComponent"

/*
  JSX : tra ve duy nhat 1 phan tu html
  state:  
*/
class MyComponent extends React.Component {
    state = {
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
                    arrjob={this.state.arrjob}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
    deleteJob = (jobItem) => {
        let currentJobs = this.state.arrjob
        currentJobs = currentJobs.filter(item => item.id !== jobItem.id)
        this.setState({
            arrjob: currentJobs
        })
    }
}

export default MyComponent