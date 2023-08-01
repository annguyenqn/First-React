import React from "react";


/*
  JSX : tra ve duy nhat 1 phan tu html
  state:  
*/
class ChildComponent extends React.Component {
    state = {
        showjobs: false
    }
    handleShowHide = (status) => {
        this.setState({
            showjobs: !this.state.showjobs
        })

    }
    render() {
        let newarr = ''
        let { arrjob } = this.props
        let { showjobs } = this.state
        let check = showjobs === true ? 'showjob = true' : 'showjobs = false'
        console.log('check condi', check)
        // chỉ sử dụng cú pháp này khi pros key trả ra trùng với vế trái
        return (
            <>
                {/* dấu && nếu showjob = true thì sẽ in vế sau của && */}
                {showjobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                newarr = arrjob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )

                                })
                            }
                            {console.log('ch2eck props:', newarr)}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()} >Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { arrjob } = props
//     console.log('check', props)
//     return (
//         <div>
//             {
//                 arrjob.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )

// }
// const Welcome = (props) => {
//     return <h1>hello, {props.name} </h1>

// }
export default ChildComponent