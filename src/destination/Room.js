import "./RoomStyle.css"
import RoomData from "./RoomData"
import room1 from "../assests/room1.jpg"
import room2 from "../assests/room2.jpg"
import room3 from "../assests/room3.webp"
function Room(){
    return(
        <div className="room">
            <h1>Rooms We Provide</h1>
            <p>These are the best rooms that you never seen</p>
            <div className="roomcard">
                <RoomData
                image={room1}
                heading="Accommodation 1 A/C & non A/C"
                text="Our single bed room is a cozy and comfortable space designed for individuals seeking a peaceful retreat. It features a comfortable single bed with high-quality bedding, a study desk, and a chair for work or relaxation. The room is tastefully decorated with soft lighting and calming colors to create a serene ambiance. It comes with amenities such as air conditioning or heating, a flat-screen TV, high-speed internet access, and a private bathroom with modern facilities. Your safety is ensured with secure locks and 24/7 surveillance. Additional services like daily housekeeping and a concierge desk are available to make your stay enjoyable."
                url="/bookform"
                />
                <RoomData
                image={room2}
                heading="Accommodation 2 A/C & non A/C"
                text="Our two bed room offers a spacious and inviting space perfect for individuals or groups. It features two cozy beds with high-quality bedding, a study desk, and a chair for your convenience. The room is tastefully decorated with a warm and welcoming ambiance. Amenities include air conditioning or heating, a flat-screen TV, high-speed internet access, and a private bathroom with modern facilities. Your safety is ensured with secure locks and 24/7 surveillance. Additional services like daily housekeeping and a concierge desk are available to enhance your stay."
                url="/bookform"
                />
                <RoomData
                image={room3}
                heading="Accommodation 3 A/C & non A/C"
                text="Introducing our eye-catching and spacious three bed room! Perfect for families or groups, this room offers comfort and style. Features include three cozy beds with high-quality bedding, a study desk, and ample storage. The room is tastefully decorated, creating a welcoming ambiance. Enjoy amenities like air conditioning, a flat-screen TV, and high-speed internet. Your safety is our priority with secure locks and 24/7 surveillance. Additional services include daily housekeeping and a helpful concierge desk. Make your stay unforgettable in our vibrant three bed room!"
                url="/bookform"
                />




            </div>
        </div>
    )
}
export default Room