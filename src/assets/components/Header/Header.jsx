import '../Header/styles.css';

function Header() {
    return (
        <div className="header-background">
                <div className="header container">
                    <img className='logo' src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="Logo" />
                    <ul>
                        <li>Bicicletas</li>
                        <li>Seguros</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div className="sectionHeader container">
                    <div className="conteudoHeader">
                        <h1>Bicicletas feitas sob medida.</h1>
                        <p>Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft <span className='spanHeader'>.</span></p>
                        <button>Escolha a sua</button>
                    </div>
                    <div className="imgBike">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg" alt="Bicicleta" />
                    </div>
                </div>
            </div>
    );
}

export default Header;
