import CardBicicleta from "../CardBicicleta/CardBicicleta"
import './cardList.css'

const CardList = ()=> {
    return(
        <>
        <div className="container">
        <h1 className="titleCardList">escolha a sua<span className="spanCardList"></span></h1>
        <div className="list">
        <CardBicicleta />
        <CardBicicleta />
        <CardBicicleta />
        </div>
        </div>
        </>
    )
}

export default CardList