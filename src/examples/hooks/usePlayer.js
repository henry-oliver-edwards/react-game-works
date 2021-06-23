import arrayRandom from "../functions/arrayRandom";
import {useCallback, useState} from "react";

const getStartingPlayer =()=>{
    const players = ['X', 'O']
    return arrayRandom(players)
}

const usePlayer =()=>{
    const [currentPlayer, setCurrentPlayer] = useState(getStartingPlayer())

    const changePlayer = useCallback(()=>{
        let newPlayer;
        if (currentPlayer === 'X') {
            newPlayer = 'O'
        } else if (currentPlayer === 'O') {
            newPlayer = 'X'
        }
        setCurrentPlayer(newPlayer)
    }, [currentPlayer])

    return [currentPlayer, changePlayer]
}

export default usePlayer;