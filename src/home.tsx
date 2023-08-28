import "./home.css"
import banner from "./media/banner.png"
export default function Home() {
    return (
        <>
            <div className={"home"}>
                <img src={banner} alt="banner" className={"banner"}/>
            </div>
        </>
    )
}