import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Cómo crear un Carrusel en LinkedIn</h1>
      </div>

      <div className={styles.center}>
        <div>
          <h2>1. Creá una cuenta en Canva</h2>
          <p>
            Para diseñar lo más fácil y rápido es crear una cuenta en{" "}
            <a href="https://www.canva.com/" target="_blank" rel="noreferrer noopener">
              {" "}
              Canva.
            </a>{" "}
          </p>
          <p>Podés ingresar directamente con tu cuenta de gmail sin llenar nada.</p>
        </div>

        <div>
          <h2>2. Creá tu diseño</h2>
          <p>
            El tamaño de tu diseño es importante para que las imágenes y el contenido se ajusten
            bien.
          </p>
          <p>Elegí el template "Post para LinkedIn"</p>
          <img src={"/01carrusel.jpg"} alt="canva crear diseño" />
        </div>

        <div>
          <h2>3. Creá tu contenido</h2>
          <p>Desplegá tu magia...</p>
        </div>

        <div>
          <h2>4. Guardá como pdf</h2>
          <p>Archivo → Descargar</p>
          <img src={"/02carrusel.jpg"} alt="descargar archivo" />
          <p>→ Como PDF</p>
          <img src={"/03carrusel.jpg"} alt="guardar como pdf" />
        </div>

        <div>
          <h2>5. Posteá en LinkedIn</h2>
          <p>Agregá el pdf en el post</p>
          <img src={"/04carrusel.jpg"} alt="postear en linkedin" />
        </div>

        <div className={styles.bob}>
          <h2>Listo el Carrusel</h2>
          <Image width={300} height={169} src={"/bob-ok.gif"} alt="bob esponja hace ok" />
        </div>
      </div>
    </main>
  )
}
