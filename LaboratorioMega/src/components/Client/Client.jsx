
import './Client.css';
import logo1 from '../../assets/logobasepisos.png';
import logo2 from '../../assets/GNPlogo.png';
import logo3 from '../../assets/LogoMultimasterPisos.png';


const LOGOS_CLIENTES = [
  { id: 1, src: logo1, alt: 'Logo Base Pisos' },
  { id: 2, src: logo2, alt: 'Logo GNP' },
  { id: 3, src: logo3, alt: 'Logo Multimaster Pisos' },
];


const LogoCliente = ({ src, alt }) => (
  <div className="item_logo_cliente">
    <img
      src={src}
      alt={alt}
      className="imagem_logo_cliente"
    />
  </div>
);


const SecaoClientes = () => (
  <section className="secao_clientes" id="clientes">


    <div className="cabecalho_clientes">
      <h3 className="rotulo_secao">Nossos clientes</h3>
      <h2 className="titulo_secao">Acreditamos que cada cliente seja único</h2>
    </div>


    <div className="grade_logos">
      {LOGOS_CLIENTES.map(logo => (
        <LogoCliente
          key={logo.id}
          src={logo.src}
          alt={logo.alt}
        />
      ))}
    </div>
  </section>
);

export default SecaoClientes;