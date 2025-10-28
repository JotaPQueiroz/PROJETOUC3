
import './Service.css';
import concretobica from '../../assets/concreto_saindo_bica.jpg';
import metragem from '../../assets/metragem.jpg';
import slump from '../../assets/slump.jpg';
import pressao from '../../assets/presao.png';
import prensa from '../../assets/prensa.jpg';
import tracao from '../../assets/tracao.jpg';



const ConcretoBicaIcon = ({ className }) =>
  <img src={concretobica} alt="Concreto saindo da bica" className={`${className} service_image`} />;

const MetragemIcon = ({ className }) =>
  <img src={metragem} alt="Medição de abatimento" className={`${className} service_image`} />;

const SlumpIcon = ({ className }) =>
  <img src={slump} alt="Teste de Slump" className={`${className} service_image`} />;

const PrensaIcon = ({ className }) =>
  <img src={prensa} alt="Prensa de ensaio de compressão" className={`${className} service_image`} />;

const SoloIcon = ({ className }) =>
  <img src={tracao} alt="Ensaio de tração" className={`${className} service_image`} />;



const BritadeiraIcon = ({ className }) =>
  <img
    src={pressao}
    alt="Ícone de Ensaio de Compressão"
    className={`${className} service_image`}
  />;




const ServiceItem = ({ title, description, Icon }) => {
  return (
    <div className="service_item" >

      <div className="icon_container">
 
        <Icon className="service_icon" />
        <div className="icon_line"></div>
      </div>

      <h3 className="service_title">{title}</h3>

      <p className="service_description">{description}</p>
    </div>
  );
};


const AtuacaoSection = () => {

  const servicesData = [
    {
      id: 1,
      title: "Amostragem de concreto fresco",
      description: "NBR 16886:2020",
      Icon: ConcretoBicaIcon
    },
    {
      id: 2,
      title: "Determinação da consistência pelo abatimento de cone",
      description: "NBR 16889:2020",
      Icon: MetragemIcon 
    },
    {
      id: 3,
      title: "Procedimento para moldagem e cura de corpos de prova",
      description: "NBR 5738:2016",
      Icon: SlumpIcon 
    },
    {
      id: 4,
      title: "Determinação do teor de ar – método pressométrico",
      description: "NBR 16887:2020",
      Icon: BritadeiraIcon 
    },
    {
      id: 5,
      title: "Ensaio de compressão de corpos de prova cilíndricos",
      description: "NBR 5739:2018",
      Icon: PrensaIcon 
    },
    {
      id: 6,
      title: "Determinação da resistência à tração na flexão em corpo_de_prova prismáticos",
      description: "NBR 12142:2010",
      Icon: SoloIcon 
    },
  ];

  return (
    <section className="atuacao_section" id="servicos">

    
      <div className="projects_header">
        <h3 className="section_label">Nossos serviços</h3>
        <h2 className="section_headline">Especialistas no concreto</h2>
        <p className="section_description">Experiência na prestação de serviços técnicos, disponibilizando engenheiros, técnicos e os equipamentos necessários para o controle tecnológico do concreto.</p>
      </div>

      <div className="services_grid">
        {servicesData.map(service => (
          <ServiceItem
            key={service.id}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
          />
        ))}
      </div>
    </section>
  );
};

export default AtuacaoSection;