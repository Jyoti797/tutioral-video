import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { VideoAdd } from "./video-add";

export function TutorialManage() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:5566/videos`,
        }).then((response) => {
            setVideos(response.data);
        })
    }, []);

    return (
        <div className="container-fluid">
            
                <h2>Manage Videos </h2>
                <div className="mb-2">
                    <Link to="/addvideo">
                    <button className="btn btn-primary" >
                        Add new video
                    </button>
                    </Link>
                </div>
              
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Preview</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            videos.map(video =>
                                <tr key={video.id} className="col">
                                    <td className="col-2">{video.title}</td>
                                    <td className="col-7">
                                        <iframe width="500" height="300" src={video.url} title={video.title} ></iframe>
                                    </td>
                                    <td className="col-3">
                                        <Link to={`/details/${video.id}`} >
                                            <span className="bi bi-eye btn btn-success m-3 p-3">
                                                Details
                                            </span>
                                        </Link>
                                        <Link to={`/edit/${video.id}`}>
                                        <span className="bi bi-pen btn btn-dark m-3 p-3">
                                                Edit
                                            </span>
                                        </Link>

                                         <Link to={`/delete/${video.id}`}>
                                         <span className="bi bi-trash btn btn-danger m-3 p-3">
                                                Delete
                                            </span>
                                        </Link>

                                      
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>


        </div>
    )
}