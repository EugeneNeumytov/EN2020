import './Whiteblock.css'
import logo1 from './img/Icon1.png'
import logo2 from './img/Icon2.png'
import logo3 from './img/Icon3.png'

const Whiteblock = () => {
    return (
        <div className="white-block">
            <div className="white-container">
                <div className="main-text">
                    <h2>Rafael  Lechner</h2>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur, consequatur deleniti distinctio dolor enim impedit nobis placeat quia totam. Delectus ea eum, harum illum impedit nihil officia quia tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur, consequatur deleniti distinctio dolor enim impedit nobis placeat quia totam. Delectus ea eum, harum illum impedit nihil officia quia tenetur.
                    </div>
                </div>

                <div className="flex-block">
                    <div className="block">
                        <div className="icon"><img src={logo1}/></div>
                        <div className="icon-title">Sketching is fun</div>
                        <div className="icon-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid animi aut commodi cupiditate deleniti et expedita facilis natus neque, nesciunt officia praesentium quisquam reprehenderit rerum veniam? Nulla, omnis.
                        </div>
                    </div>
                    <div className="block">
                        <div className="icon"><img src={logo2}/></div>
                        <div className="icon-title">Design Afterwards</div>
                        <div className="icon-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid animi aut commodi cupiditate deleniti et expedita facilis natus neque, nesciunt officia praesentium quisquam reprehenderit rerum veniam? Nulla, omnis.
                        </div>
                    </div>
                    <div className="block">
                        <div className="icon"><img src={logo3}/> </div>
                        <div className="icon-title">Finalize</div>
                        <div className="icon-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid animi aut commodi cupiditate deleniti et expedita facilis natus neque, nesciunt officia praesentium quisquam reprehenderit rerum veniam? Nulla, omnis.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whiteblock;