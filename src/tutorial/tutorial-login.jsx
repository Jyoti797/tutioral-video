import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { boolean } from "yup";
import { useCookies } from "react-cookie";





export function TutorialLogin() {
    let flag = false;
    const [users, setUsers] = useState([{}]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            "UserId": "",
            "Password": ""
        },
        onSubmit: (customer) => {
            axios({
                method: "get",
                url: `http://127.0.0.1:5005/customers`
            })
                .then(response => {
                    setUsers(response.data);
                    for (var user of response.data) {
                        if ((user.UserId == customer.UserId) && (user.Password == customer.Password)) {
                            setCookie("userid", customer.UserId);
                            navigate("/videos");
                            flag = true;
                        }
                    }
                    if (flag == false) {
                        navigate("/error");
                    }
                })
        }
    })

    return (
        <div>
            <h2>User LogIn</h2>

            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>User ID</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange} /></dd>

                    <dt>Password</dt>
                    <dd><input type="text" name="Password" onChange={formik.handleChange} /></dd>
                </dl>

                <button className="btn btn-primary m-3 p-2" type="submit" >
                    LogIn
                </button>

                <p className="m-4">
                    <Link to="/register" >
                        New User Register Here
                    </Link>
                </p>
            </form>
        </div>
    )
}