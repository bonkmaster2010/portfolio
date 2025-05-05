import { useNavigate } from "react-router"
import '../styles/NotFound.css';

export default function NotFound(){
    const navi = useNavigate();
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>How did you get here ?!</p>
            <button onClick={() => navi('/')}>Teleport</button>
        </div>
    )
}