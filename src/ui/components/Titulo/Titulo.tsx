import { 
    TituloStyled, 
    Subtitulo
} from './Titulo.style';

interface TituloProps {
    titulo: string
    //o exemplo abaixo com ? diz que não é obrigatório
    subtitulo?: string | JSX.Element
}

export default function Titulo (props: TituloProps) {
    return (
        <>
            <TituloStyled>{props.titulo}</TituloStyled>
            <Subtitulo>{props.subtitulo}</Subtitulo>
        </>
    )
}