import  { useState } from 'react';
import './contato.css'; // Crie um arquivo CSS para estilizar o componente

function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);
      
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container container">
            <h1 className='titleContato'>nosso contato<span className="spanCardList"></span></h1>
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='inputs'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='inputs'>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                    placeholder='O que você precisa?'
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contato;
