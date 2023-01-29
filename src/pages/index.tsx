import { Inter } from '@next/font/google'
import SplitBanner from '@/components/splitBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="homeContainer">
      <div className="homeContainer__header">
        <div className="homeContainer__header__pretitle">
          DESARROLLO DE APLICACIONES WEB
        </div>
        <div className="homeContainer__header__title">
          <div>
            <span className="secondary-color">z</span>shuck
          </div>
          <div className="homeContainer__header__title_2">
          <span className="font-md"> by <span className="secondary-color">Rubén Pérez Herrando</span></span>
          </div>
        </div>
        <div className="homeContainer__header__photo"></div>
        <div className="homeContainer__header__description">
          <p>Hola 👋🏽 mi nombre es Rubén Pérez y soy full-stack developer. 
          Desarrollo todo tipo de páginas web y aplicaciones. Puedes seguirme
          en mis redes para ver consejos sobre programación.
          </p>
        </div>
      </div>
    </div>
    <SplitBanner/>
    </>
  )
}
