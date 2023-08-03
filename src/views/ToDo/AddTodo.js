import React from "react";
import { toast } from 'react-toastify';


class AddTOdo extends React.Component {
    state = {
        title: ''
    }
    handleOnchangeTitle = (e) => {
        this.setState({
            title: e.target.value
            //bắt được state title trong input
        })

    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Missing title')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
        // lấy id random , title ở trên, và dùng hàm cha để push todo mới vào trong state cha 
    }
    render() {
        let { title } = this.state
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(e) =>
                            this.handleOnchangeTitle(e)
                        }
                    />
                    <button className="add-btn" onClick={() => this.handleAddTodo()}>ADD</button>
                </div>
            </>
        )
    }
}
export default AddTOdo