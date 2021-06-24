import arrayRandom from "../functions/arrayRandom";
import {useCallback, useState} from "react";

const getStartingPlayer =()=>{
    const players = ['X', 'O']
    return arrayRandom(players)
}

const usePlayer =()=>{
    const [currentPlayer, setCurrentPlayer] = useState(getStartingPlayer())

    const changePlayer = useCallback(()=>{
        if (currentPlayer === 'X') {
            setCurrentPlayer('O')
        } else if (currentPlayer === 'O') {
            setCurrentPlayer('X')
        }
    }, [currentPlayer])

    return [currentPlayer, changePlayer]
}

export default usePlayer;