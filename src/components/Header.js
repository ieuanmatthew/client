import { useNavigate } from "react-router-dom";


export default function Header() {
    const history = useNavigate()
    return(
        <>
            <div className="header">
                <h1 className="left">Data Scientist</h1>
                <div className="right">
                    <div onClick={() => history('/Home')}>Home</div>
                    <div onClick={() => history('/Projects')}>Projects</div>
                    <div onClick={() => history('/Blog')}>Blog</div>
                    <div onClick={() => history('/Resume')}>Resume</div>
                </div>
            </div>
            <h1>Ieuan Israel</h1>
            <h2>Data, Decisions and Learning</h2>
        </>
    )
}