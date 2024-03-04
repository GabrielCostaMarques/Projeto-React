import style from './style/MainBody.module.css'



export default function MainBody() {
    return (
        <section className={style.BodyMain}>
            <div className={style.MainBodyContent_left}>
              <h1 className={style.slideInUp}>Hi,  </h1>
                
                <h1 className={style.slideInUp}>I'm Gabriel Marques</h1>
                <h3 className={style.slideInUp}>Web Developer</h3>
                <p className={style.slideInUp}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam esse aperiam sed aut atque! Veritatis ipsa, unde minima expedita fugit ad dicta neque cumque in perferendis voluptatem, eos ducimus rem.</p>

            <div className={style.ContentButtonMain}> 
                <button>Hire me!</button>
                <button>View Portfolio</button></div>
               
            </div>

            <div className={style.MainBodyContent_right}>
                <img src="./fotoPerfilPortifolio.png" alt="Imagem de Perfil" />
            </div>
        </section>
    )
}