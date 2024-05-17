import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export function VideoDelete(){
    const params = useParams();
    const navigate = useNavigate();
    const [videos, setVideos] = useState([{id:0, title:" ", url:" ", views:0, likes:0, subscribed: false}]);
    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:5566/videos/${params.id}`,
        }).then((response) => {
            setVideos(response.data);
        })
    }, []);

function handleDelete(){
    axios({
        method:"delete",
        url:`http://localhost:5566/deletevideo/${params.id}`
    })
    alert(`Video deleted successfully.........`);
    navigate("/manage");
}


    return(
        <div>
        <h2>Delete video ??? are you sure you want to delete video????</h2>
        <div>
          <span>
          <button className="btn btn-outline-success btn-lg m-4 p-3" onClick={handleDelete} >Yes</button>
          </span>

            <span>
        <Link  to="/manage" ><button className="btn btn-outline-danger btn-lg m-4 p-3">No</button></Link>
            </span>
        </div>

        <div className="card m-4">  
            <div className="card-header mt-4">
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
      
    </div>
    )
}