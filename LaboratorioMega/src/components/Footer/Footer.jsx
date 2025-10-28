import "./Footer.css";
import Logo from '../../assets/LogoMega.jpeg';

const RodapeMega = () => {
  return (
    
    <footer className="container_rodape"> 
     
      <div className="principal_rodape">
        
       
        <div className="coluna_rodape coluna_marca">
          <img className="logo_rodape" src={Logo} alt="Logo Mega" />
        </div>

        
        <div className="coluna_rodape">
          <h3 className="titulo_rodape">Sede</h3>
          <p>Rua Ercília Zem de Oliveira, 166. </p>
          <p>Santa Terezinha, 13408_394, Piracicaba_SP </p>
          <p>CNPJ 423568630001_46</p>
          <div className="detalhes_contato">
            <a href="https://www.laboratoriomega.com.br/" target="_blank" rel="noopener noreferrer">www.laboratoriomega.com.br</a>
          </div>
        </div>

        
        <div className="coluna_rodape">
          <h3 className="titulo_rodape">Redes Sociais</h3>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

      
        <div className="coluna_rodape coluna_contato">
          <h3 className="titulo_rodape">Fale conosco</h3>
            <p>Para qualquer pergunta, <br /> dúvida ou comentário, <br /> ligue para (11) 99119_1332</p>
          <a href="#" target="_blank" rel="noopener noreferrer">contato@laboratoriomega.com.br</a>
        </div>
      </div>

    
      <div className="rodape_inferior">
        <div className="info_direitos">
          <span>© {new Date().getFullYear()} Laboratório Mega </span>
        </div>
        <div className="links_politicas">
          <a href="#">Política de Cookies</a>
          <span>|</span>
          <a href="#">Política de Privacidade</a>
        </div>
        <a href="#" className="voltar_topo">Início</a>
      </div>
    </footer>
  );
};

export default RodapeMega;