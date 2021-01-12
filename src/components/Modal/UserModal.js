import React, {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Modal} from 'react-bootstrap'
import {deleteUser, updateUser, getAllUser} from '../../api/'
import {getUser} from '../../store/listuser'
const UserModal = (props) => {
    const dispatch = useDispatch()
    let [initUser,setInitUser] = useState({})
    useEffect(() => {
        setInitUser({...props.item})
    }, [props.item])
    const FooterContent = ({initItem}) => {
        const deleteData = async (val) => {
            let result = await deleteUser(val)
            await dispatch(getUser())
            alert('Delete Succesfully!')
        }
        const updateData = async (val) => {
            let result = await updateUser(val)
            await dispatch(getUser())
            alert('Response: ' + await result.json())
        }
        switch (props.optionType) {
            case 'delete': 
                return (<button className = "btn btn-danger" 
                            onClick={() => deleteData(initItem)}>
                            Confirm
                        </button>)
            case 'update':
                return (<button className="btn btn-primary" 
                            form='user-form' 
                            onClick={() => updateData(initItem)}>
                            Update
                        </button>)
            default:
                return (<></>)
        }
    }
    const onCheck = (type) => {
        if(type == 'update')
            return true
        return false
    }
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
            <form id='user-form' onSubmit={e => e.preventDefault()}>   
                 <div className = "row">
                    <div className = "col-3">
                        <div id="carouselExampleControls" className="carousel slide pb-3" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={props.item.avatar} 
                                                                height={148} alt="First slide"/>
                                </div>
                            </div>
                        </div>
                        <input type="file" className="file-upload form-control" 
                            //onChange={e => uploadImages(e)}
                        />
                    </div>
                    <div className= "col-9">
                        <div className = "form-row pb-2">
                            <div className = "col">
                                <b>Tên thật: </b>
                                <div className="input-group">
                                    <input type="text" 
                                        className="form-control" 
                                        disabled={!onCheck(props.optionType)} 
                                        defaultValue={props.item.fullName}
                                        onChange={(e) => setInitUser({
                                            ...initUser,
                                            fullName: e.target.value
                                        })}
                                        />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" 
                                        type="button" 
                                        onClick={() => alert(props.item._id)}>Id</button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col">
                                <b>Tên người dùng: </b>
                                <input type="text"
                                    className="form-control" 
                                    disabled={!onCheck(props.optionType)} 
                                    defaultValue={props.item.local.username}
                                    onChange={(e) => setInitUser({
                                        ...initUser,
                                        local: {
                                            ...initUser.local,
                                            username: e.target.value
                                        }
                                    })}
                                />
                            </div>
                            <div className="col">
                                <b>Mật khẩu: </b>
                                <input type="text"
                                    className="form-control" 
                                    disabled={!onCheck(props.optionType)} 
                                    defaultValue={props.item.local.password}
                                    onChange={(e) => setInitUser({
                                        ...initUser,
                                        local: {
                                            ...initUser.local,
                                            password: e.target.value
                                        }
                                    })}
                                />
                            </div>                                        
                        </div>
                        <div className = "form-row pb-2">
                            <div className="col">
                                <b>Vai trò: </b>
                                <input type="text"
                                    className="form-control" 
                                    disabled={!onCheck(props.optionType)} 
                                    defaultValue={props.item.roles}
                                    onChange={(e) => setInitUser({
                                        ...initUser,
                                        roles: e.target.value
                                    })}
                                />
                            </div>
                            <div className="col">
                                <b>Tình trạng: </b>
                                <input type="text"
                                    className="form-control" 
                                    disabled={!onCheck(props.optionType)} 
                                    defaultValue={props.item.status ? "Hoạt động" : "Không hoạt động"}
                                    onChange={(e) => setInitUser({
                                        ...initUser,
                                        status: e.target.value
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>     
            </form>
            </Modal.Body>
            <Modal.Footer>
                <FooterContent initItem = {initUser}/>
                <button className='btn btn-primary' onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}
export default UserModal