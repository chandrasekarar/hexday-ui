import React, { Component, memo, useState } from 'react'
import { useSpring, a } from 'react-spring'
import { useMeasure, usePrevious } from './helpers'
import { Global, Frame, Title, Content, toggle } from '../styles'
import * as Icons from './icons'
import './custom.css';

const Tree = memo(({ children, tree, style, defaultOpen = false, props, path }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
  })
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  const Add = Icons['Plus']
  const Remove = Icons['Minus']

  return (
    <Frame>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title style={style} onClick={() => props.onClick(children ? '' : tree.name, props.type)}>{tree.name}</Title>
      {
        tree.level !== 3 && props.showAdd !== false ?
          <Add style={{ ...toggle }} className="custom-plus custom-icon" onClick={() => { setOpen(true); props.onAdd(tree) }} />
          : null
      }
      {children || props.showAdd === false ? null :
        <Remove style={{ ...toggle }} className="custom-icon" onClick={() => { setOpen(true); props.onRemove(tree) }} />}
      <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  )
})

class TreeView extends Component {
  treeMap = (trees, props) => {
    return trees.map((tree, index) => {
      if (!tree) return null
      return (<Tree tree={tree} props={props} defaultOpen key={tree.name + index}>
        {
          tree.nodes ? this.treeMap(tree.nodes, props) : null
        }
      </Tree>)
    })
  }

  render() {
    const props = this.props
    return (
      <>
        <Global />
        {
          this.treeMap(props.trees, props)
        }
      </>
    )
  }
}

export default TreeView