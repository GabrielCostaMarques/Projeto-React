import style from './style/MainBody.module.css';
import { AiFillGithub,AiFillInstagram,AiFillLinkedin, AiFillFacebook   } from "react-icons/ai";



export default function AboutMe() {
    return (
        <section className={style.BodyMain}>
            <div className={style.MainBodyContent_right}>
                <img src="./FotoPerfil-6.png" alt="Imagem de Perfil" />
            </div>
            <div className={style.MainBodyContent_left}>
                <h1 className={style.slideInUp}>About me</h1>
                <h3 className={style.slideInUp}>_________________</h3>
                <p className={style.slideInUp}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam esse aperiam sed aut atque! Veritatis ipsa, unde minima expedita fugit ad dicta neque cumque in perferendis voluptatem, eos ducimus rem.</p>

                <div >
                    <AiFillGithub className={style.icons}/>
                    <AiFillInstagram className={style.icons}/>
                    <AiFillLinkedin className={style.icons}/>
                    <AiFillFacebook className={style.icons}/>

                </div>
            </div>


        </section>
    )
}

//className={style.ContainerIcons}