

export const Footer = () => {
    return (
        <div className="container mt-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center mb-3">
                    <p className="text-white">© 2023 - 41.339.465/0001-59 - Walkr Tecnologia Ltda.</p>
                </div>
                <div className="col-md-3 col-6 text-center">
                    <div className="institucional d-flex flex-column gap-2">
                        <i className="fa-sharp fa-solid fa-clipboard-list" style={{ color: '#24AAAB' }}></i>
                        <p className="text-white">Institucional</p>
                    </div>
                </div>
                <div className="col-md-3 col-6 text-center">
                    <div className="blog d-flex flex-column gap-2">
                        <i className="fa-brands fa-blogger-b" style={{ color: '#24AAAB' }}></i>
                        <p className="text-white">Blog</p>
                    </div>
                </div>
                <div className="col-md-3 col-6 text-center mt-3 mt-md-0">
                    <div className="termo-privacidade d-flex flex-column gap-2">
                        <i className="fa-solid fa-note-sticky" style={{ color: '#24AAAB' }}></i>
                        <p className="text-white">Termo de privacidade</p>
                    </div>
                </div>
            </div>
        </div>

    )
}