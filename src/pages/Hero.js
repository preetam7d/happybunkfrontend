import "./HeroStyles.css"
function Hero(props){
    return  (
        <>
        <div className={props.cName}>
            <img alt="heroimh" src={props.heroImg}/>

        </div>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <p>{props.text2}<a href={props.url} className={props.btnClass}>{props.buttonText}</a></p>
        </div>
        </>
    )
}
export default Hero