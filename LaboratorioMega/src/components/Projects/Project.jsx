
import './Project.css';
import toyota from '../../assets/toyota.jpg';
import atacadao from '../../assets/atacadao.png';
import condominio from '../../assets/Condominio.jpg';


const CartaoProjeto = ({ titulo, urlImagem, textoAlt }) => {
  return (
    <div className="cartao_projeto">
      <div className="container_imagem_projeto">
        <img
          src={urlImagem}
          alt={textoAlt}
          className="imagem_projeto"
        />
      </div>
      <p className="titulo_projeto">{titulo}</p>
    </div>
  );
};


const SecaoProjetos = () => {


  const dadosProjetos = [
    {
      id: 1,
      title: "Toyota _ Porto Feliz",
      imageUrl: toyota,
      altText: "Toyota _ Porto Feliz"
    },
    {
      id: 2,
      title: "Atacadão _ Granja Vianna",
      imageUrl: atacadao,
      altText: "Vista aérea de um complexo Atacadão"
    },
    {
      id: 3,
      title: "Residencial Vida Nova _ Embu das Artes",
      imageUrl: condominio,
      altText: "Condomínio Residencial Vida Nova"
    },

  ];

  return (
    <section className="secao_projetos" id="projetos">

      <div className="cabecalho_projetos">
        <h3 className="rotulo_secao">Nossos projetos</h3>
        <h2 className="titulo_principal_secao">Qualidade e satisfação com o melhor preço.</h2>
        <p className="descricao_secao">Estamos equipados para execução dos diversos ensaios em concreto, desde uma simples análise de caracterização dos seus materiais componentes, até para execução de ensaios de verificação da qualidade, durabilidade e estabilidade.</p>
      </div>


      <div className="grade_projetos">
        {dadosProjetos.map(projeto => (
          <CartaoProjeto
            key={projeto.id}
            titulo={projeto.title}
            urlImagem={projeto.imageUrl}
            textoAlt={projeto.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default SecaoProjetos;