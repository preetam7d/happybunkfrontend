import "./RoomStyle.css"
import { Link } from "react-router-dom"
function RoomData (props){
    return(
        <div className="r-card">
            <div className="r-image">
                <img src={props.image} alt="img"/>
            </div>
            <h4>
                {props.heading}
            </h4>
            <p>{props.text}</p>
            <Link to={props.url}><button className="room-btn">BOOK ROOM</button></Link>

        </div>

    )
    }
    export default RoomData