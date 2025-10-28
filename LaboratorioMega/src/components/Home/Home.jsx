
import './Home.css'; 
import solo from '../../assets/solo1.jpg';

const Inicio = () => {
    return (
  
        <>
            
            <section id="home" className="secao_hero">

           
                <div
                    className="fundo_hero"
                >
                    <div className="sobreposicao_hero"></div>
                </div>

                
                <div className="conteudo_hero">

                    <h1 className="titulo_principal_hero">
                        Construindo com <br />
                        concreto qualificado
                    </h1>

                    <p className="subtitulo_principal_hero">
                        especialista em ensaios tecnológicos em concreto.
                    </p>

                    <div className="acoes_hero">
                        <button className="botao botao_primario">
                            <a href="#projetos">Ver projeto</a>
                        </button>
                        <button className="botao botao_secundario">
                            <a href="#contato">Contatar</a>
                        </button>
                    </div>
                </div>
            </section>

            
            <section className="secao_destaque">

              
                <div className="barra_cabecalho_destaque">
                    <p className="rotulo_cabecalho">Concreto adequado é o nosso forte</p>
                    <h2 className="titulo_cabecalho">Medir é gerenciar com precisão</h2>
                </div>

               
                <div className="colunas_conteudo_destaque">

                   
                    <div className="coluna_texto_destaque">
                        <p className="paragrafo_secao paragrafo_1">
                            A Mega é especializado na execução de ensaios normatizados para acompanhamento da qualidade de obras de edificações, infraestrutura e pisos industriais.
                            Profissionais qualificados com dezenas de anos de experiência em controle de qualidade de matérias e serviços para construção civil.
                        </p>
                        <p className="paragrafo_secao paragrafo_2">
                            Desenvolvimento de traços e suporte técnico para usinas e centrais de concreto, fábricas de argamassa e obras em geral. A Mega foi criado em julho de 2018 e atende clientes na capital e cidades do interior do estado de São Paulo.
                        </p>
                    </div>

                    
                    <div className="coluna_imagem_destaque">
                        <img className='imagem_destaque' src={solo} alt="Homens assentando piso de concreto" />
                    </div>
                </div>
            </section>
        </>
    );
};


export default Inicio;

