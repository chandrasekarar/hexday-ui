import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal" style={{ "display": "block" }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Item</h5>
                        <button type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => { props.onClose() }}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" autoFocus
                                value={props.value}
                                onChange={props.handleChange}
                                placeholder="Enter name"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && props.value.trim()) {
                                        props.onSubmit()
                                    }
                                }} />
                        </div>
                    </div>
                    <div className="modal-footer">

                        <button type="button" className="btn btn-secondary" data-dismiss="modal"
                            onClick={() => { props.onClose() }}>Close</button>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => { props.onSubmit() }}
                        >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal