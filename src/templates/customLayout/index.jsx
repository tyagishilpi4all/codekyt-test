import "./style.css"

const CustomLayout = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="layout-section">
                        <div className="banner-image">
                            <img src="https://dronequote.net/static/media/hm-intro-img.a980d2cf.jpg" alt="home_banner_image" />
                        </div>
                        <div className="quote-section">
                            <h1>Home Solar & <br /> Roofing Made <br /> Simple</h1>
                            <p>DroneQuote is your guide in helping you find the best solar or roofing companies.</p>
                            <button className="btn btn-warning">GET MY QUOTES</button>
                        </div>
                        <div className="car-section">
                            <div className="s-wrapper">
                                <div className="s-section">
                                    <h2>Electric Vehicle Calculator</h2>
                                    <p>How many solar panels will your driving need?</p>
                                </div>
                                <div className="c-section">
                                    <img src="https://dronequote.net/static/media/hm-elec-car.3406c1aa.png" alt="car_image" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomLayout