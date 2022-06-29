import "./home.css";
import Navbar from "../../components/Nav/Navbar"
import { SliderCarroussel } from "../../components/Slider/SliderCarroussel"
import { Tutorial } from "../../components/Tutorial/Tutorial";
import { InvestimentBar } from "../../components/InvestimentBar/InvestimentBar";
import { DriverBar } from "../../components/DriverBar/DriverBar";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <SliderCarroussel />
            <div className="animation">
            <span className="mouse">
                <span className="mouse-wheel"></span>
            </span>
            </div>
            <Tutorial />
            <InvestimentBar />
            <DriverBar />
        </div>
    )
}

export {Home}