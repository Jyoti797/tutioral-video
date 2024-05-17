
import { Link } from "react-router-dom"




export function TutorialError() {
    return (
        <div>
            <h2 className="text-danger" >Invalid User ID and Password</h2>

            <Link to="/login" >
                Try Again
            </Link>

        </div>

    )
}