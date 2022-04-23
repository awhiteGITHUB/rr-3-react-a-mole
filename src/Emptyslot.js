import { useEffect } from "react"
import MoleHill from './molehill.png'

const Emptyslot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} alt="moles for wack a mole"/>
        </div>
    )
}

export default Emptyslot