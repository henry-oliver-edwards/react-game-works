import usePlayer from "./hooks/usePlayer";
import GameContainer from "../core/GameContainer";
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";

const GridBox = (props) => {
    return (
        <div style={{
            width: 100, height: 100, backgroundColor: 'black', border: '1px solid white',
            left: props.x, top: props.y, position: 'absolute', color: 'white'
        }} className={'d-flex align-items-center justify-content-center'}>
            <p>
                {props.player}
            </p>
        </div>
    )
}

const NaughtsAndCrosses = () => {

    const [currentPlayer, changePlayer] = usePlayer()
    const [topText, setTopText] = useState('')

    const square1 = {id: 1, props: {x: 100, y: 100, player: ''}, display: GridBox}
    const square2 = {id: 2, props: {x: 200, y: 100, player: ''}, display: GridBox}
    const square3 = {id: 3, props: {x: 300, y: 100, player: ''}, display: GridBox}
    const square4 = {id: 4, props: {x: 100, y: 200, player: ''}, display: GridBox}
    const square5 = {id: 5, props: {x: 200, y: 200, player: ''}, display: GridBox}
    const square6 = {id: 6, props: {x: 300, y: 200, player: ''}, display: GridBox}
    const square7 = {id: 7, props: {x: 100, y: 300, player: ''}, display: GridBox}
    const square8 = {id: 8, props: {x: 200, y: 300, player: ''}, display: GridBox}
    const square9 = {id: 9, props: {x: 300, y: 300, player: ''}, display: GridBox}

    const setPlayerArrayFunctions = () => {
        const array = []
        for (let i in [...Array(9).keys()]) {
            const setPlayer = {
                target_id: parseInt(i) + 1, type: 'click', callback: (own) => {
                    own.props.player = currentPlayer;
                    changePlayer()
                }
            }
            array.push(setPlayer)
        }
        return array
    }

    const logic =(elements)=>{
        if(areEqual(elements[0].props.player, elements[1].props.player, elements[2].props.player)) {
            if(elements[0].props.player !== '') {
                return `${elements[0].props.player}-win`
            }
        }
        if(areEqual(elements[3].props.player, elements[4].props.player, elements[5].props.player)) {
            if(elements[3].props.player !== '') {
                return `${elements[3].props.player}-win`
            }
        }
        if(areEqual(elements[6].props.player, elements[7].props.player, elements[8].props.player)) {
            if(elements[6].props.player !== '') {
                return `${elements[6].props.player}-win`
            }
        }
        if(areEqual(elements[0].props.player, elements[3].props.player, elements[6].props.player)) {
            if(elements[0].props.player !== '') {
                return `${elements[0].props.player}-win`
            }
        }
        if(areEqual(elements[1].props.player, elements[4].props.player, elements[7].props.player)) {
            if(elements[1].props.player !== '') {
                return `${elements[1].props.player}-win`
            }
        }
        if(areEqual(elements[2].props.player, elements[5].props.player, elements[8].props.player)) {
            if(elements[2].props.player !== '') {
                return `${elements[2].props.player}-win`
            }
        }
        if(areEqual(elements[0].props.player, elements[4].props.player, elements[8].props.player)) {
            if(elements[0].props.player !== '') {
                return `${elements[0].props.player}-win`
            }
        }
        if(areEqual(elements[2].props.player, elements[4].props.player, elements[6].props.player)) {
            if(elements[2].props.player !== '') {
                return `${elements[2].props.player}-win`
            }
        }
    }

    const onLogic =(event)=>{
        if(event === 'X-win') {
            setTopText('X Has Won')
        } else if(event === 'O-win') {
            setTopText('O Has Won')
        }
    }

    return (
        <div>
            <h3 style={{color: 'white'}}>{topText ? topText : `current player is ${currentPlayer}`}</h3>
            <GameContainer elements={[square1, square2, square3, square4,
                square5, square6, square7, square8, square9]} events={setPlayerArrayFunctions()}
                           logic={[logic]} onLogic={[onLogic]} target_fps={10}/>
        </div>
    )

}

function areEqual(){
    let len = arguments.length;
    for (let i = 1; i< len; i++){
        if (arguments[i] === null || arguments[i] !== arguments[i-1])
            return false;
    }
    return true;
}

export default NaughtsAndCrosses;