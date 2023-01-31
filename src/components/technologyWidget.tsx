function TechnologyWidget(){
    
    var technologies = [
        {
            'name': 'javascript',
            'logo': 'url',
            'stack': 'frontend',
            'link': 'linnk'
        },
        {
            'name': 'javascript',
            'logo': 'url',
            'stack': 'frontend',
            'link': 'linnk'
        },
        {
            'name': 'javascript',
            'logo': 'url',
            'stack': 'frontend',
            'link': 'linnk'
        },
        {
            'name': 'javascript',
            'logo': 'url',
            'stack': 'frontend',
            'link': 'linnk'
        },
        {
            'name': 'javascript',
            'logo': 'url',
            'stack': 'frontend',
            'link': 'linnk'
        },
        {
            'name': 'javascript',
            'logo': 'url',
            'stack': 'frontend',
            'link': 'linnk'
        },
        {
            'name': 'javascript',
            'logo': 'url',
            'stack': 'frontend',
            'link': 'linnk'
        },
    ]

    return(
        <div className="technologyWidgetContainer">
            <div className="technologyWidgetContainer_w">
        {
            technologies.map(x => (
                <a className="technologyLink" href={`/${x.link}`}>
                    <div className="technologyCard">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" width="50" height="55"/>
                        <div>{x.name}</div>
                        <div>{x.stack}</div>
                    </div>

                </a>

            ))
        }
        </div>
        </div>
    )
}

export default TechnologyWidget;