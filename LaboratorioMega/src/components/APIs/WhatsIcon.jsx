
import './WhatsIcon.css';
import Whats from '../../assets/whats.png';
const WhatsIcon = ({ phoneNumber, message }) => {
    const fullNumber = phoneNumber.replace(/\D/g, ''); 
    const encodedMessage = encodeURIComponent(message); 
    const whatsappUrl = `https://wa.me/${fullNumber}?text=${encodedMessage}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whats_icon"
            title="Fale Conosco pelo WhatsApp"
        >
            <img src={Whats} alt="Ícone Whatsapp" /> 
        </a>
    );
};

export default WhatsIcon;