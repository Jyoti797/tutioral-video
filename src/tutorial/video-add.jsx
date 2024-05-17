import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export function VideoAdd(){

    let navigate = useNavigate();
   const formik = useFormik({
    initialValues:{
        id: 0,
        title: " ",
        url: " ",
        likes: 0,
        views: 0,
        subscribed: false
    },
    onSubmit: (values) => {
        axios({
            method: "post",
            url: `http://localhost:5566/addvideo`,
            data: values
    
        })
        alert(`Video added successfully.....`);
        navigate("/manage");
       }
   });


    return(
        <div>
            <h2>Welcome to add videos page</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" name="id" onChange={formik.handleChange}  /></dd>

                    <dt>Title</dt>
                    <dd><input type="text" name="title" onChange={formik.handleChange}  /></dd>

                    <dt>URL</dt>
                    <dd><input type="text" name="url" onChange={formik.handleChange}  /></dd>

                    <dt>Likes</dt>
                    <dd><input type="number" name="likes" onChange={formik.handleChange}  /></dd>

                    <dt>Views</dt>
                    <dd><input type="number" name="views" onChange={formik.handleChange}  /></dd>

                    <dt>Subscribed</dt>
                    <dd className="form-switch">
                        <input type="checkbox" name="subscribed" className="form-check-input" checked={formik.values.subscribed} onChange={formik.handleChange}  />
                    </dd>
                </dl>

                <button className="btn btn-success m-4 p-2" type="submit">
                    Submit
                </button>
            </form>
        </div>

       
    )
}