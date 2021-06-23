import GameContainer from "../core/GameContainer";

const ColouredGrid = (props) => {
    return (
        <div style={{width: 100, height: 100, backgroundColor: props.bg, border: `5px solid ${props.bc}`, color: 'white'}}>Click Me</div>
    )
}

const generateRandomColour = () => {
    const randomColour = Math.floor(Math.random() * 16777215).toString(16)
    return '#' + randomColour
}

const ColouredSquare =()=>{

    const square = {id: 1, props: {bg: 'black', bc: 'red'}, display: ColouredGrid}
    const change_bg = {target_id: 1, type: 'click', callback: (own)=>{own.props.bg = generateRandomColour(); console.log(own)}}

    return (
        <div>
            <GameContainer elements={[square]} events={[change_bg]} target_fps={30}/>
        </div>
    )
}

export default ColouredSquare;