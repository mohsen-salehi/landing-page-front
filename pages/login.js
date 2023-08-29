import React, {useState} from 'react';
import OtpComponent from "@/components/login/otpComponent";
import RequestComponent from "@/components/login/requestComponent";

function Login() {
    const [status, setStatus] = useState("request")
    return (
        <div>
            {status === "request" && <RequestComponent status={status} setStatus={setStatus}/>}
            {status === "otp" && <OtpComponent/>}
        </div>);
}

export default Login;