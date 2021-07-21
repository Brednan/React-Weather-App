import Styles from './Title.module.css'

const Title = () => {

    return(
        <div className={Styles.title} style={{position: "relative", left: "-20px"}}>
            <h1>WEATHER APP</h1>
        </div>)
}

export default Title