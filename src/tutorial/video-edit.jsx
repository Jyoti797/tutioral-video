import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



export function VideoEdit(){

    const params = useParams();
    const navigate = useNavigate();
    const [videos, setVideos] = useState([{id:0, title:" ", url:" ", views:0, likes:0, subscribed: false}]);

   
   const formik = useFormik({
    initialValues:{
        id: videos[0].id,
        title: videos[0].title,
        url: videos[0].url,
        likes: videos[0].likes,
        views: videos[0].views,
        subscribed: videos[0].subscribed
    },
    onSubmit: (values) => {
        axios({
            method: "put",
            url: `http://localhost:5566/updatevideo/${params.id}`,
            data: values
    
        })
        alert(`Video updated successfully.....`);
        navigate("/manage");
       }
   });

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
            <h2>Edit video details</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" name="id" value={videos[0].id} onChange={formik.handleChange}  /></dd>

                    <dt>Title</dt>
                    <dd><input type="text" name="title" value={videos[0].title} onChange={formik.handleChange}  /></dd>

                    <dt>URL</dt>
                    <dd><input type="text" name="url" value={videos[0].url} onChange={formik.handleChange}  /></dd>

                    <dt>Likes</dt>
                    <dd><input type="number" name="likes" value={videos[0].likes} onChange={formik.handleChange}  /></dd>

                    <dt>Views</dt>
                    <dd><input type="number" name="views" value={videos[0].views} onChange={formik.handleChange}  /></dd>

                    <dt>Subscribed</dt>
                    <dd className="form-switch">
                        <input type="checkbox" name="subscribed" checked={videos[0].checked} className="form-check-input"  onChange={formik.handleChange}  />
                    </dd>
                </dl>

                <button className="btn btn-success m-4 p-2">
                    SAVE
                </button>

                <Link to ="/manage" className="btn btn-warning">Cancel</Link>
            </form>
        </div>

       
    )
}
