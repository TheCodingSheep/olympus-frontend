import "./Olyzaps.scss";
import 'bulma/css/bulma.min.css';
import give from "../../assets/images/Group 2.png"
import zap from "../../assets/images/Frame 133.png"
import swatt from "../../assets/images/Vector (4).png"
import arrow from "../../assets/images/open-in-new 1.png"

const Olyzaps = () => {
    return (
        <div id="olyzaps-view">
            <div className="connect-wallet-card">
                <button className="connect-button">Connect Wallet</button>
                <p className="connect-subtitle pt-2">Connect your wallet to use Zap</p>
            </div>
            <div className="contract-card">
                <div className="columns">
                    <div className="column give-column">
                        <div className="give-image-title mb-5">
                            <figure>
                                <img src={give} alt="" />
                            </figure>
                            <p className="give">You Give</p>
                        </div>
                        <p className="zap-title ">
                            Zap is a swap
                        </p>
                        <br/>
                        <p className="zap-subtitle">
                            A zap swap is a series of smart<br /> contracts that deploys one asset<br />to another protocol to handle a<br /> trusted transaction
                        </p>
                    </div>
                    <div className="column">
                        <div className="zap-title-image mb-5">
                            <figure>
                                <img src={zap} alt="" />
                            </figure>
                            <p className="give text-align-centered">
                                All-in-one zap contracts
                            </p>
                            
                        </div>
                        <p className="zap-title">
                            All-in-one easy staking
                        </p>
                        <br/>

                        <p className="zap-subtitle">
                            OlyZap reduces complexity, saves you time and keeps<br /> you here on Olympus.
                        </p>
                    </div>
                    <div className="column">
                        <div className="swatt-image-title mb-5">
                            <figure>
                                <img src={swatt} alt="" />
                            </figure>
                            <p className="give">
                                You Get sWATT
                            </p>
                        </div>
                        <p className="zap-title">
                            Staking
                        </p>
                        <br/>
                        <p className="zap-subtitle">
                            Staking is the primary value<br /> accrual strategy of Olympus. When<br /> you stake, you lock OHM and<br /> receive an equal amount of<br /> sWATT.
                        </p>
                    </div>
                </div>
                <button className="learn-button">
                    Learn More
                <figure>
                    <img src={arrow} className="arrow-icon ml-4" alt="" />
                </figure>
                </button>
            </div>

        </div>
    )
}

export default Olyzaps
