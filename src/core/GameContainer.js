import {createElement, useEffect, useState} from "react";

const GameContainer = (props) => {

    const events = props.events
    const [render, setRender] = useState([])
    const [elements, setElements] = useState(props.elements)
    const [logic, setLogic] = useState(props.logic)
    const [onLogic, setOnLogic] = useState(props.onLogic)
    const [currentLogic, setCurrentLogic] = useState(undefined)
    const fps = props.target_fps

    const constructRender = () => {
        checkLogic()
        doOnLogic()
        const toRender = [];
        for (const ele in elements) {
            let click = emptyFunc
            for (const e in events) {
                if (events[e]['target_id'] === elements[ele]['id']) {
                    if (events[e]['type'] === 'click') {
                        click = events[e]['callback']
                    }
                }
            }
            toRender.push(createElement('div', {
                    onClick: () => {
                        click(elements[ele]);
                    }
                },
                createElement(elements[ele]['display'], {...elements[ele]['props'], id: elements[ele]['id']}, null)))
        }

        setRender(toRender)
    }

    const checkLogic =()=>{
        for(let i in logic) {
            let temp = logic[i](elements)
            if (temp !== undefined) {
                setCurrentLogic(temp)
            }
        }
    }

    const doOnLogic =()=>{
        for(let i in onLogic) {
            onLogic[i](currentLogic)
        }
    }
    // const checkSimilarity = (elements) => {
    //     const oldProps = [];
    //     const newProps = [];
    //     console.log(elements)
    //     render.forEach((value, index, array) => {
    //         oldProps.push(value.props.children.props)
    //     })
    //     elements.forEach((value, index, array) => {
    //         newProps.push(value['props'])
    //     })
    //     if (oldProps === newProps) {
    //         console.log(true)
    //     } else {
    //         console.log(false)
    //     }
    // }

    useEffect(() => {
        const interval = setInterval(constructRender, 1000 / fps)
        return ()=>{clearInterval(interval)}
    }, [constructRender, fps])

    return (
        <div>
            {[render]}
        </div>
    )
}

const emptyFunc = () => {
}

export default GameContainer;