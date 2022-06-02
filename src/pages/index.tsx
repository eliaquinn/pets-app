import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo'
import Lista from '../ui/components/Lista/Lista'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo=""
        subtitulo={
          <span>Com um pequeno valor mensal, você <br/> pode <strong>adotar um pet virtualmente.</strong></span>
        }
      />

      <Lista
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptates rerum aliquid recusandae omnis dicta, fugiat nam consequuntur amet corrupti eos? Corrupti libero reprehenderit iure, vel a illo sapiente totam!',
            foto: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg'
          },
          {
            id: 2,
            nome: 'Salsicha',
            historia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptates rerum aliquid recusandae omnis dicta, fugiat nam consequuntur amet corrupti eos? Corrupti libero reprehenderit iure, vel a illo sapiente totam!',
            foto: 'https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png'
          }
        ]}
      />
    </div>
  )
}

export default Home
