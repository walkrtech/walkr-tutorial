

export const Header = () => {
    return (
        <>
            {window.screen.width < 767 ?
                <div className="d-column container d-md-none">
                    <img className="" src="https://walkr-bucket.s3.amazonaws.com/LogoWalkrAppBranca.png" width={250} alt="" />
                    <h2 className="text-white mt-5" style={{ textAlign: 'left' }}>Preparamos um tutorial completo para você!​</h2>
                </div>
                :
                <div className="d-column container">
                    <img className="" src="https://walkr-bucket.s3.amazonaws.com/LogoWalkrAppBranca.png" width={200}  alt="" />
                    <h2 className="text-white mt-5" >Preparamos um tutorial completo para você!​</h2>
                </div>
            }
        </>
    )
}