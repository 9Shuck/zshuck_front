function ProjectWidget() {

    var cardData = [
        {
            'photo1': 'https://mouredev.com/wp-content/uploads/2019/10/tp_cast.jpg',
            'description': 'Servicio para niños con autismo',
            'className': 'Okage'
        },
        {
            'photo1': 'https://mouredev.com/wp-content/uploads/2018/11/jeff.jpg',
            'description': 'SaaS product',
            'className': 'ACSOP'
        },
        {
            'photo1': 'https://mouredev.com/wp-content/uploads/2018/11/betsfy.jpg',
            'description': 'dApp para mintear NFTs',
            'className': 'KeenCircle'
        },
        {
            'photo1': 'https://mouredev.com/wp-content/uploads/2018/11/pilbeo.jpg',
            'description': 'SaaS product',
            'className': 'Scoretize'
        },
        {
            'photo1': 'https://mouredev.com/wp-content/uploads/2018/11/vippter.jpg',
            'description': 'Portfolio',
            'className': 'zshuck'
        }
    ]

    return(
        <div className="projectWidgetContainer">
            {cardData.map(x => (
                <div className='projectCard' key={cardData.indexOf(x)}
                >   <div className="projectCard__hover">
                    </div>
                    <img className="projectCard__img" src={x.photo1} alt={x.className}
                    />

                    <div className="projectCard__description">
                        <p className="projectCard__description_1">{x.className}</p>
                        <p className="projectCard__description_2">{x.description}</p>
                    </div>
                </div>
                
            ))}
            
        </div>
    )
}

export default ProjectWidget;