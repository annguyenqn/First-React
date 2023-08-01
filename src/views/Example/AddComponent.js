import React from "react";
class AddComponent extends React.Component {
    state = {
        title: "",
        salary: ''
    }
    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('check data input: ', this.state)
        this.props.addNewJob(
            {
                id: Math.floor(Math.random() * 1000),
                title: this.state.title,
                salary: this.state.salary
            }
        )
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {

        return (

            <div>
                <form>
                    <label>Title: </label>
                    <input
                        type="text"
                        onChange={(e) => this.handleChangeTitle(e)}
                        value={this.state.title}
                    />
                    <br></br>
                    <label>Salary: </label>
                    <input
                        type="text"
                        onChange={(e) => this.handleChangeSalary(e)}
                        value={this.state.salary}
                    />
                    <br></br>
                    <input
                        type="button" value={"submit"}
                        onClick={(e) => this.handleSubmit(e)}
                    />
                </form>
            </div>
        )
    }
}
export default AddComponent