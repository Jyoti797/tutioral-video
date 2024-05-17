import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";



export function TutorialVideos() {

    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.userid == undefined) {
            navigate("/login");
        }

    }, [])

    function handleSignout() {
        removeCookie("userid");
        navigate("/login");
    }

    return (
        <div>
            <h2>Tutorial Videos</h2>
            <h3>{cookies.userid}</h3>
            <span className="btn btn-danger m-4 p-2" onClick={handleSignout}  >
                SignOut
            </span>
            <div className="d-flex flex-wrap">
                <div className="m-4">
                    <iframe title="v1" src="https://www.youtube.com/embed/zHm4Mw3qhgs" width="250" height="150" />
                </div >
                <div className="m-4">
                    <iframe title="v2" src="https://www.youtube.com/embed/lLkX2toJ1j8" width="250" height="150" />
                </div>
                <div className="m-4">
                    <iframe title="v3" src="https://www.youtube.com/embed/gBVjfShR9ss" width="250" height="150" />
                </div>
                <div className="m-4">
                    <iframe title="v4" src="https://www.youtube.com/embed/Q073TTZx7aM" width="250" height="150" />
                </div>
                <div className="m-4">
                    <iframe title="v5" src="https://www.youtube.com/embed/Hur59sjE5wo" width="250" height="150" />
                </div>
                <div className="m-4">
                    <iframe title="v6" src="https://www.youtube.com/embed/M33j0t2W6zM" width="250" height="150" />
                </div>
                <div className="m-4">
                    <iframe title="v7" src=" https://www.youtube.com/embed/Z2uCmS3qgpo" width="250" height="150" />
                </div>
                <div className="m-4">
                    <iframe title="v8" src="https://www.youtube.com/embed/627v3Ip_wW0 " width="250" height="150" />
                </div>
                <div className="m-4">
                    <iframe title="v9" src="https://www.youtube.com/embed/ZFb-W1PAcnI" width="250" height="150" />
                </div>
                <div className="m-4">
                    <iframe title="v10" src="https://www.youtube.com/embed/e64JTo7LMmY" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v11" src="https://www.youtube.com/embed/Y4eC-qblPHU" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v12" src="https://www.youtube.com/embed/ecEcVudcCzg" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v13" src="https://www.youtube.com/embed/ba9TJFBdFQ8" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v14" src="https://www.youtube.com/embed/iqs1qw80rUs" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v15" src="https://www.youtube.com/embed/j7u7AErcYB8" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v16" src="https://www.youtube.com/embed/SfiD81EdbMs" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v17" src="https://www.youtube.com/embed/qcRIG3-pMc8 " width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v18" src="https://www.youtube.com/embed/Y1l1Ectu6Fo " width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v19" src="https://www.youtube.com/embed/hBZU2UuPOqA" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v20" src="https://www.youtube.com/embed/0xgKoxukbNs" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v21" src="https://www.youtube.com/embed/HFYv-rk4v9Y" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v22" src="https://www.youtube.com/embed/brFQZ2fREbs" width="250" height="150" />
                </div>

                <div className="m-4">
                    <iframe title="v23" src="https://www.youtube.com/embed/hcRW9evFZBw" width="250" height="150" />
                </div>

            </div>
        </div>
    )
}

