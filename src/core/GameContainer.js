import {createElement, useEffect, useState} from "react";

const GameContainer = (props) => {

    const events = props.events
    const [render, setRender] = useState([])
    const elements = props.elements
    const fps = props.target_fps

    const constructRender =()=>{
        console.log('firing')
        const toRender = []
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
                        click(elements[ele]['props']);
                    }
                },
                createElement(elements[ele]['display'], {...elements[ele]['props'], id: elements[ele]['id']}, null)))
        }
        setRender(toRender)
    }

    useEffect(()=>{
        const timer = setInterval(constructRender, 1000/fps)
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