import { 
    CabecalhoContainer,
    Logo
} from "./Cabecalho.style";

function Cabecalho () {
    return (
        <CabecalhoContainer>
            <Logo src="/imagens/logo.svg" alt="Adote um pet"/>
        </CabecalhoContainer>
    )
}

export default Cabecalho