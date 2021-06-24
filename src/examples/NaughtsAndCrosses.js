import usePlayer from "./hooks/usePlayer";
import GameContainer from "../core/GameContainer";
import {useCallback} from "react";

const GridBox =(props)=>{
    return (
        <div style={{width: 100, height: 100, backgroundColor: 'black', border: '1px solid white',
        left: props.x, top: props.y, position: 'absolute', color: 'white'}}>{props.player}</div>
    )
}

const NaughtsAndCrosses =()=>{

    const [currentPlayer, changePlayer] = usePlayer()

    const square1 = {id: 1, props: {player: 'None', x: 100, y: 100}, display: GridBox}
    const square2 = {id: 2, props: {player: 'None', x: 200, y: 100}, display: GridBox}
    const square3 = {id: 3, props: {player: 'None', x: 300, y: 100}, display: GridBox}
    const square4 = {id: 4, props: {player: 'None', x: 100, y: 200}, display: GridBox}
    const square5 = {id: 5, props: {player: 'None', x: 200, y: 200}, display: GridBox}
    const square6 = {id: 6, props: {player: 'None', x: 300, y: 200}, display: GridBox}
    const square7 = {id: 7, props: {player: 'None', x: 100, y: 300}, display: GridBox}
    const square8 = {id: 8, props: {player: 'None', x: 200, y: 300}, display: GridBox}
    const square9 = {id: 9, props: {player: 'None', x: 300, y: 300}, display: GridBox}

    const setPlayerArrayFunctions = ()=>{
        const array = []
        for (let i in [...Array(9).keys()]) {
            const setPlayer = {target_id: parseInt(i) + 1, type: 'click', callback: (own)=>{own.props.player = currentPlayer; changePlayer()}}
            array.push(setPlayer)
        }
        return array
    }

    return (
        <div>
            <h3>Current player {currentPlayer}</h3>
            <GameContainer elements={[square1, square2, square3, square4,
            square5, square6, square7, square8, square9]} events={setPlayerArrayFunctions()} target_fps={10}/>
        </div>
    )

}

export default NaughtsAndCrosses;