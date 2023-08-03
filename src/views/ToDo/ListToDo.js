import React from "react";
import './ListTodo.scss'
import AddTOdo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        ListTodos: [
            { id: 1, title: 'doing homework' },
            { id: 2, title: 'playgame' },
            { id: 3, title: 'making video' }
        ],
        editTodo: {}
        // state nay chua obj khi nhan edit

    }
    addNewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
        })
        toast.success('Add Success')
        // push param todo vào array
    }
    handleDeletetodo = (todo) => {
        let currentTodo = this.state.ListTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        // map tra ra 1 array moi voi bộ lọc id item do khac voi id item vua lick
        this.setState({
            ListTodos: currentTodo
        })
        toast.success('Delete Success')
    }
    handleEditTodo = (todo) => {
        let { ListTodos, editTodo } = this.state

        //save
        let isEmtyObj = Object.keys(editTodo).length === 0

        if (isEmtyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...ListTodos]
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id))
            listTodoCopy[objIndex].title = editTodo.title
            this.setState({
                ListTodos: listTodoCopy,
                editTodo: {}
            })
            return
        }
        //edit
        this.setState({
            editTodo: todo
        })
        //editodo item sau khi click duoc gan cho state edittodo
    }
    handleCacle = () => {
        this.setState({
            editTodo: {}
        })

    }
    handleOnchaneEdit = (e) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
        toast.success("Update Success")

    }
    render() {
        let { ListTodos, editTodo } = this.state
        // tên phải cùng với tên của state
        //let ListTodos = this.state.ListTodos
        let isEmtyObj = Object.keys(editTodo).length === 0
        // dk so sanh neu length = 0 thi tra ra = true neu khac ko isemty tra ra  = faulse
        return (
            <>
                <div className="list-todo-container">
                    <AddTOdo addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {ListTodos && ListTodos.length > 0 && ListTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {
                                        //  khi chưa nhấn edit thì nó edittodo 
                                        // vẫn còn null thì ta vẫn render ra list như bth còn nếu nó not null thì ta render ra input
                                        isEmtyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    // nếu cái editid = với item thì mới in ra cái cần sửa
                                                    <span>{index + 1} - <input value={editTodo.title}
                                                        onChange={(e) => this.handleOnchaneEdit(e)}
                                                    />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                    }
                                    <button className="edit-btn" onClick={() => this.handleEditTodo(item)}>

                                        {isEmtyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                        {/* {isEmtyObj === false && editTodo.id === item.id ?
                                            <>
                                                <button onClick={() => this.handleCacle()}>Cancle</button>
                                            </>
                                            : 'Edit'

                                        } */}
                                    </button>
                                    {isEmtyObj === false && editTodo.id === item.id ?
                                        <>
                                            <button onClick={() => this.handleCacle()}>
                                                Cancle
                                            </button>
                                        </>
                                        : ''}
                                    <button className="delete-btn" onClick={() => this.handleDeletetodo(item)}>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default ListTodo