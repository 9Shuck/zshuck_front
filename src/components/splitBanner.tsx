

function SplitBanner(){

    var array = ['ios', 'android', 'web']
    return(
        <div className="splitBannerContainer">
            {array.map(x => {
                return(
                    <div key={array.indexOf(x)}>{x}</div>
                )
            })}
        </div>
    )
}

export default SplitBanner;