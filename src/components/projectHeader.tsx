function ProjectHeader(){
    return(
        <div className="projectHeaderContainer">
            <div className="projectHeaderContainer__cont">
            <div className="projectHeaderContainer__title">
                conoce más de mí profesionalmente
            </div>
            <div className="projectHeaderContainer__buttonContainer">
                <a href="/projects#projects">
                <div className="projectHeaderContainer__button">
                    <p>proyectos</p>
                </div>
                </a>
                <a href="/projects#technologies">
                <div className="projectHeaderContainer__button">
                    <p>tecnologías</p>
                </div>
                </a>
            </div>
            </div>
        </div>
    )
}

export default ProjectHeader;