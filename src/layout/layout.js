import React, { Component } from 'react'
import "./layout.css"
import TreeView from '../tree/TreeView'
import PreText from './PreText'
import 'react-dropdown/style.css';
// import axios from 'axios';

class layout extends Component {

    constructor() {
        super()
        this.state = {
            tree1Item: null,
            tree2Item: null,
            showPreText: false
        }
    }
    onRequest = () => {

    }
    onTreeItem = (item, type) => {
        if (type === 1) {
            this.setState({
                tree1Item: item ? `InformationSourceLevel.InformationReceiverLevel.InformationReceiverName.` +
                    item.replace(" ", "") : ""
            })
        } else {
            this.setState({
                tree2Item: item ? `Member.` + item.replace(" ", "") : ""
            })
        }

    }

    render() {
        const tree1 = [{
            name: "Information Source Level",
            value: {
                name: "Information Receiver Level",
                value: {
                    name: "Information Receiver Name",
                    value: {
                        mName: "Middle Name"
                    }
                }
            }
        }]
        const tree2 = [{
            name: "Member",
            value: {
                fName: "First Name",
                mName: "Middle Name",
                lName: "Last Name"
            }
        }]

        let disabled = this.state.tree1Item && this.state.tree2Item ? false : true
        return (
            <div>
                <div className="hex-header">
                    <h1>HEX DAY</h1>
                    <h3>ETI UI Demo</h3>
                </div>

                <div className="hex-path row">
                    <div className="c1">
                        {
                            this.state.tree1Item ?
                                <span>{this.state.tree1Item}</span>
                                : null
                        }
                    </div>
                    <div className="c2">
                        {
                            this.state.tree2Item ?
                                <span>{this.state.tree2Item} </span>
                                : null
                        }
                    </div>

                </div>

                <div className="row">
                    <div className="column tree-column">
                        <TreeView onClick={this.onTreeItem} tree={tree1} type={1} />
                    </div>
                    <div className="column tree-option-column">
                        <TreeView onClick={this.onTreeItem} tree={tree2} type={2} />
                    </div>
                </div>

                <div className="hex-devider"></div>
                <div onClick={this.onRequest}
                    className={disabled ? `btn btn-primary btn-custom btn-disabled` : 'btn btn-primary btn-custom'}>
                    <span>Fire 271 Request</span>
                </div>
                <div className="hex-devider"></div>

                {
                    this.state.showPreText ? <PreText /> : null
                }

            </div>
        )
    }
}

export default layout