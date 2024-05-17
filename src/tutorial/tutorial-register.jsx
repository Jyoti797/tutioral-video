import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";




export function TutorialRegister() {

    const [userError, setUserError] = useState('');
    const [users, setUsers] = useState([]);
    const [colorClass, setColorClass] = useState('');
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            "UserId": "",
            "UserName": "",
            "Password": "",
            "Age": 0,
            "Email": "",
            "Mobile": ""
        },
        onSubmit: (values) => {
            axios({
                method: "post",
                url: "http://127.0.0.1:5005/registercustomer",
                data: values
            })
            alert(`Registered Successfully.......`);
            navigate("/login");
        }
    })

    function VerifyUserId(e) {
        axios({
            method: "get",
            url: "http://127.0.0.1:5005/customers"

        })
            .then(response => {
                setUsers(response.data);
                for (var user of users) {
                    if (user.UserId == e.target.value) {
                        setUserError(`User ID taken - Try Another`);
                        setColorClass(`text-danger`);
                        break;

                    } else {
                        setUserError(`User ID available`);
                        setColorClass(`text-success`);
                    }
                }
            }

            )

    }
    return (
        <div>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}  >
                <dl>
                    <dt>User ID</dt>
                    <dd><input type="text" name="UserId" onKeyUp={VerifyUserId} onChange={formik.handleChange} /></dd>
                    <dd className={colorClass} >{userError} </dd>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" name="Password" onChange={formik.handleChange} /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange} /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                </dl>

                <button className="btn btn-primary m-4 p-2" >
                    Register
                </button>

                <p>
                    <Link to="/login" >
                        Existing user LogIn

                    </Link>
                </p>
            </form>
        </div>
    )
}