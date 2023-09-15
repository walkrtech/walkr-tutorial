

export const Header = () => {
    return (
        <>
            {window.screen.width < 767 ?
                <div className="d-column container d-md-none">
                    <img className="" src="https://walkr.app/wp-content/uploads/2022/08/logo-walkr.svg" alt="" />
                    <h2 className="text-white mt-5" style={{ textAlign: 'left' }}>Preparamos um tutorial completo para você!​</h2>
                    <h6 className="text-white mt-3" style={{ textAlign: 'left' }}>Confira o passo a passo para ter a melhor experiência no nosso App e ter as respostas que precisa!​​</h6>
                </div>
                :
                <div className="d-column container">
                    <img className="" src="https://walkr.app/wp-content/uploads/2022/08/logo-walkr.svg" alt="" />
                    <h2 className="text-white mt-5" >Preparamos um tutorial completo para você!​</h2>
                    <h6 className="text-white mt-3" >Confira o passo a passo para ter a melhor experiência no nosso App e ter as respostas que precisa!​​</h6>
                </div>
            }
        </>
    )
}