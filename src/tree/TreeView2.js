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
            <Title style={style} onClick={() => props.onClick(children ? '' : name)}>{name}</Title>
            <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
            </Content>
        </Frame>
    )
})

const TreeView = (props) => (
    <>
        <Global />
        <Tree name="main" props={props} defaultOpen>
            <Tree name="hello" props={props} />
            <Tree name="subtree with children" props={props}>
                <Tree name="hello" props={props} />
                <Tree name="sub-subtree with children" props={props}>
                    <Tree name="child 1" style={{ color: '#37ceff' }} props={props} />
                    <Tree name="child 2" style={{ color: '#37ceff' }} props={props} />
                    <Tree name="child 3" style={{ color: '#37ceff' }} props={props} />
                    <Tree name="custom content" props={props}>
                        <div className="hex-inline-options" style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                            <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                        </div>
                    </Tree>
                </Tree>
                <Tree name="hello" props={props} />
            </Tree>
            <Tree name="world" props={props} />
            <Tree name="something" props={props} />
        </Tree>
    </>
)
export default TreeView
