
import style from '../style/MyProfile.module.css'


export default function MyProfile() {
    return (
        <section className={style.BodyProjects} id='projetos'>
            <h2 style={{ display: 'block', width: "100%",marginLeft:10 }}>PROJETOS </h2>
            <div className={style.ProjectsBlocks}>
                <span className={style.TagProject}>FRONTEND</span>
                <div>
                    <img src="./FotoPerfil-6.png" alt="Projeto-1" />
                </div>
                <div>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus dignissimos cumque quis! Similique, eum, architecto aliquam alias hic impedit pariatur nemo molestiae dolorum corrupti sed reiciendis atque quam quae sit!</p> </div>
            </div>
            <div className={style.ProjectsBlocks}>
                <span className={style.TagProject}>FRONTEND</span>
                <div>
                    <img src="./FotoPerfil-6.png" alt="Projeto-1" />
                </div>
                <div>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus dignissimos cumque quis! Similique, eum, architecto aliquam alias hic impedit pariatur nemo molestiae dolorum corrupti sed reiciendis atque quam quae sit!</p> </div>
            </div>
            <div className={style.ProjectsBlocks}>
                <span className={style.TagProject}>FRONTEND</span>
                <div>
                    <img src="./FotoPerfil-6.png" alt="Projeto-1" />
                </div>
                <div>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus dignissimos cumque quis! Similique, eum, architecto aliquam alias hic impedit pariatur nemo molestiae dolorum corrupti sed reiciendis atque quam quae sit!</p> </div>
            </div>
            <div className={style.ProjectsBlocks}>
                <span className={style.TagProject}>FRONTEND</span>
                <div>
                    <img src="./FotoPerfil-6.png" alt="Projeto-1" />
                </div>
                <div>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus dignissimos cumque quis! Similique, eum, architecto aliquam alias hic impedit pariatur nemo molestiae dolorum corrupti sed reiciendis atque quam quae sit!</p> </div>
            </div>

        </section>
    )
}