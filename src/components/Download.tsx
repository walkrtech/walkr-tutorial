

export const Download = () => {
    return (
        <div className="container bg-blue mt-5" style={{ backgroundColor: '#012536', borderRadius: 20 }}>
            <div className="container p-3 p-md-5">
                <div className="text text-center">
                    <p style={{ color: '#24AAAB', fontSize: '1.25rem' }}>BAIXE AGORA</p>
                    <h3 className="text-white">Assuma o controle da sua vida financeira</h3>
                </div>
                <div className="d-flex flex-column flex-md-row gap-3 gap-md-5 justify-content-center mt-4 mt-md-5">
                    <a href="https://apps.apple.com/us/app/walkr-apps/id1617544867">
                        <img
                            src="https://walkr.app/wp-content/uploads/2022/08/btn-store.svg"
                            alt=""
                            style={{ maxWidth: '100%', width: '100%' }}
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=walkrApp.apk">
                        <img
                            src="https://walkr.app/wp-content/uploads/2022/08/btn-gstore.svg"
                            alt=""
                            style={{ maxWidth: '100%', width: '100%' }}
                        />
                    </a>
                    <a href="">
                        <img
                            src="https://walkr.app/wp-content/uploads/2022/09/qrcode.svg"
                            alt=""
                            style={{ maxWidth: '100%', width: '100%' }}
                        />
                    </a>
                </div>

            </div>
        </div>

    )
}