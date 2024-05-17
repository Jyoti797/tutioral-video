import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export function VideoDetails(){
    const params = useParams();
    const [videos, setVideos] = useState([{id:0, title:" ", url:" ", views:0, likes:0, subscribed: false}]);
    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:5566/videos/${params.id}`,
        }).then((response) => {
            setVideos(response.data);
        })
    }, []);

    return(
        <div>
            <h2>Video Details</h2>
            <div className="card">
                <div className="card-header">
                    <h3>{videos[0].title}</h3>
                </div>
                <div className="card-body">
                    <iframe src={videos[0].url} height="400" width="700" title={videos[0].id}></iframe>
                </div>
                <div className="card-footer">
                    <span className="bi bi-eye-fill">
                         [{videos[0].views}] Views
                    </span>
                    <span className="bi bi-hand-thumbs-up">
                         [{videos[0].likes}] Likes
                    </span>

                </div>

            </div>
            <p>
                <Link to="/manage">Back to Manage videos</Link>
            </p>
        </div>
    )
}