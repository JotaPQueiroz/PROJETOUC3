
import './Contact.css';

const SecaoFormularioContato = () => {
    const lidarComEnvio = (e) => {
        e.preventDefault();
        alert('Formulário enviado!');
    };

    return (
     
        <section className="secao_contato" id="contato">

            <div className="conteudo_contato">
                <h1 className="titulo_contato">Fale conosco</h1>
                <h2 className="subtitulo_contato">Para perguntas ou dúvidas</h2>
                <p className="introducao_contato">Preencha o formulário ou ligue para (11) 99119_1332</p>

                <form className="formulario_contato" onSubmit={lidarComEnvio}>

                   
                    <div className="linha_formulario">
                        <div className="grupo_entrada">
                            <input type="text" id="nome" name="nome" placeholder="Nome" required />
                            <label htmlFor="nome" className="rotulo_placeholder">Nome</label>
                        </div>
                        <div className="grupo_entrada">
                            <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome" />
                            <label htmlFor="sobrenome" className="rotulo_placeholder">Sobrenome</label>
                        </div>
                    </div>

                    
                    <div className="linha_formulario">
                        <div className="grupo_entrada">
                            <input type="email" id="email" name="email" placeholder="Email *" required />
                            <label htmlFor="email" className="rotulo_placeholder">Email *</label>
                        </div>
                        <div className="grupo_entrada">
                            <input type="text" id="assunto" name="assunto" placeholder="Assunto" />
                            <label htmlFor="assunto" className="rotulo_placeholder">Assunto</label>
                        </div>
                    </div>

                   
                    <div className="grupo_entrada largura_total">
                        <label htmlFor="mensagem" className="rotulo_mensagem">Insira sua mensagem</label>
                        <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                    </div>

                    
                    <button type="submit" className="botao_enviar">
                        Enviar
                    </button>
                </form>
            </div>

           
            <div className="container_mapa">
                
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.7737046112834!2d_47.7072335!3d_22.662224400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c634ea6697a207%3A0x5179d592b7836f5f!2sR.%20Erc%C3%ADlia%20Zem%20de%20Oliveira%2C%20166%20_%20Vila%20S%C3%B4nia%2C%20Piracicaba%20_%20SP!5e0!3m2!1spt_BR!2sbr!4v1761613846302!5m2!1spt_BR!2sbr" 
                    width="800" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no_referrer_when_downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default SecaoFormularioContato;