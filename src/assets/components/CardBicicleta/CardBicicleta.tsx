import React from 'react';

import '../CardBicicleta/CardBicicleta.css'

function CardBicicleta() {

    function comprarBike() {
        console.log('comprando a bicicleta')
    }

    // function teclaPressionada(e) {

    // }

    return (
        <>
            <div className="card-bicicleta" >
                <div>
                <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg" alt="Imagem da bike" />
                <div className='titleCard'>
                <h4 className='modelo'> <span className='spanCard'></span> Magic Might</h4>
                </div>
                <h6 className='preco'>R$ 2499</h6>

                {/* <input type='text' placeholder='Digite aqui' onChange={(e) => teclaPressionada(e)}></input> */}

                <button className='buttonCard' onClick={() => comprarBike()}>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default CardBicicleta