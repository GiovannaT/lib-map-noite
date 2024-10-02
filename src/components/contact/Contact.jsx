import React from 'react'
import './Contact.css'

const Contact = () =>{
    
    return (
        <section className="contact">
            <div>
                <h2 className="title">Contate-nos</h2>
                <form>
                    <div className="input-box">
                        <label htmlFor="name">Seu Nome</label>
                        <input id="name" type="text" className="field" required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" className="field" required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="message">Comentário / Dúvida</label>
                        <textarea name="" id="message" className="field mess" required>
                        </textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
