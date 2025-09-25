import "./Stats.scss"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import blurCircle from "../../../Assets/Common/circle-blur.webp"
import circle from "../../../Assets/Common/circle.webp"

const stats = [
    {
        id: 1,
        title1: "",
        title2: "UNITS DELIVERED",
        number: 47600,
    },
    {
        id: 2,
        title1: "",
        title2: "UNITS IN PROGRESS",
        number: 40000,
    },
    {
        id: 3,
        title1: "COMMUNITIES",
        title2: "LEADING REAL ESTATE DEVELOPER IN THE UAE",
        number: 4,
    },
    {
        id: 4,
        title1: "M SQ.FT.",
        title2: "PROJECTS UNDER PLANNING & DEVELOPMENT",
        number: 80,
    },
    {
        id: 5,
        title1: "CITIES",
        title2: "GLOBAL PRESENCE",
        number: 10
    },
]

export default function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <section>
            <div className="stats-section section-container">
                {/* <img className="blur-circle" src={blurCircle} alt="We Can Universe" />
                <img className="circle" src={circle} alt="We Can Universe" /> */}
                <div className="title">
                    <h1 className="main-title">Discover <span className="color">Luxury Living</span> with DAMAC<br/>A Global <span className="color">Real Estate Leader</span></h1>
                </div>
                <div className="title-2">
                    <p>Since 2002, DAMAC Properties has been shaping Dubai’s skyline and beyond with iconic residences, vibrant communities, and world-class developments that redefine modern living.</p>
                </div>

                <div ref={ref} className="stats-grid">
                    {stats.map((ele, i) => {
                        return (
                            <div className="stats">
                                <div className="number-div">
                                    <span className={`number n${i+1}`}>
                                        {inView && <CountUp end={ele.number} duration={3} />}+ 
                                    </span>
                                    <h4 className={`title1 n${i+1}`}>{ele.title1}</h4>
                                </div>
                                <h3 className="title2">{ele.title2}</h3>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}