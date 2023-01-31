import Technologies from '../data/technology/technologies.json'

var technologies = Technologies;

function TechnologyWidget(){

    return(
        <div className="technologyWidgetContainer">
            <div className="technologyWidgetContainer_w">
        {   
            technologies.map(x => (
                <a className="technologyLink" href={x.link} target="_blank">
                    <div className="technologyCard">
                        <img src={x.logo} height="55"/>
                        <div className="technologyCard__text">{x.name}</div>
                        <div className="technologyCard__stack">{x.stack}</div>
                    </div>

                </a>

            ))
        }
        </div>
        </div>
    )
}

export default TechnologyWidget;