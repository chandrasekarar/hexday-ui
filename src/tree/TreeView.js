import React, { memo, useState } from 'react'
import { useSpring, a } from 'react-spring'
import { useMeasure, usePrevious } from './helpers'
import { Global, Frame, Title, Content, toggle } from '../styles'
import * as Icons from './icons'

const Tree = memo(({ children, name, style, defaultOpen = false, props }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
  })
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]

  return (
    <Frame>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title style={style} onClick={() => props.onClick(children ? '' : name, props.type)}>{name}</Title>
      <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  )
})

const TreeView = (props) => (
  <>
    <Global />
    {props.type === 1 ? (
      props.tree.map(t => {
        return <Tree name={t.name} props={props} defaultOpen key={t.name}>
          <Tree name={t.value.name} props={props}>
            <Tree name={t.value.value.name} props={props}>
              <Tree name={t.value.value.value.mName} style={{ color: '#37ceff' }} props={props} />
            </Tree>
          </Tree>
        </Tree>
      })
    ) : props.tree.map(t => {
      return <Tree name={t.name} props={props} defaultOpen key={t.name}>
        <Tree name={t.value.fName} props={props} />
        <Tree name={t.value.mName} props={props} />
        <Tree name={t.value.lName} props={props} />
      </Tree>
    })

    }
  </>
)
export default TreeView
