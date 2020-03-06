import React, { Component } from 'react'
import "./layout.css"
import TreeView from '../tree/TreeView'
import PreText from './PreText'
import 'react-dropdown/style.css';
import Modal from './Modal';
// import axios from 'axios';

class layout extends Component {

    constructor() {
        super()
        this.state = {
            tree1Item: null,
            tree2Item: null,
            showPreText: false,
            showModal: false,
            value: "",
            tree: null,
            trees: [{
                name: "Information Source Level",
                level: 0,
                nodes: [{
                    name: "Information Receiver Level",
                    level: 1,
                    nodes: [{
                        name: "Information Receiver Name",
                        level: 2,
                        nodes: [{
                            name: "Middle Name",
                            nodes: null,
                            level: 3
                        }, {
                            name: "First Name",
                            nodes: null,
                            level: 3
                        }]
                    }]
                }]
            }]
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

    onAdd = (tree) => {
        this.setState({
            showModal: !this.state.showModal,
            tree: tree
        })
    }

    onRemove = (node) => {
        let trees = this.state.trees;
        var res = JSON.stringify(trees, function re(a, obj) {
            return obj === node ? null : obj
        }, 2);
        this.setState({
            trees: JSON.parse(res)
        })
    }

    onModalClose = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    onInputChange = (event) => {
        this.setState({ value: event.target.value });
    }

    onModalSubit = () => {
        let trees = this.state.trees,
            tree = this.state.tree,
            node = trees[0];
        if (tree.level > 0) {
            let idx = node.nodes.indexOf(tree)
            if (idx !== -1) {
                node = node.nodes[idx]
            } else {
                for (let j = 0; j < node.nodes.length; j++) {
                    idx = node.nodes[j].nodes.indexOf(tree)
                    if (idx !== -1) {
                        node = node.nodes[j].nodes[idx]
                        break;
                    }
                }
            }
        }
        node.nodes = node.nodes || []
        node.nodes.push({
            name: this.state.value,
            nodes: null,
            level: tree.level + 1
        })
        this.setState({
            trees: trees,
            showModal: !this.state.showModal,
            value: "",
            tree: null
        })
    }

    render() {
        const tree2 = [{
            name: "Member",
            level: 0,
            nodes: [{
                name: "First Name",
                nodes: null,
                level: 1
            }, {
                name: "Middle Name",
                nodes: null,
                level: 1
            }, {
                name: "Last Name",
                nodes: null,
                level: 1
            }]
        }]

        let trees = this.state.trees || []

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
                        <TreeView
                            onClick={this.onTreeItem}
                            onAdd={this.onAdd}
                            onRemove={this.onRemove}
                            trees={trees}
                            type={1} />
                    </div>
                    <div className="column tree-option-column">
                        <TreeView
                            onClick={this.onTreeItem}
                            trees={tree2}
                            showAdd={false}
                            type={2} />
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
                {
                    // this.state.showModal ? <Modal onClose={this.onModalClose} /> : null
                    this.state.showModal ? <Modal
                        onClose={this.onModalClose}
                        handleChange={this.onInputChange}
                        onSubmit={this.onModalSubit}
                        value={this.state.value} /> : null
                }

            </div>
        )
    }
}

export default layout


// removeFromTree = (parent, childNameToRemove) => {
    //     parent.nodes = parent.children
    //         .filter(function (child) { return child.name !== childNameToRemove })
    //         .map(function (child) { return this.removeFromTree(child, childNameToRemove) });
    //     return parent;
    // }
    // tree = removeFromTree(tree, 'elias')
    // console.log(tree);
    // document.write(JSON.stringify(tree));