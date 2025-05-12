
function Login() {
    return (
        <>
        <div id="sign-in-page" className="d-flex justify-content-center" style={{margin: "0", padding: "0", position: "relative", height: "1074px", overflow: "hidden",}}>       
        
        <div className="container-fluid" style={{backgroundImage: "linear-gradient(to right, rgb(22, 22, 22), rgb(12, 35, 165), rgb(12, 35, 165), rgb(84, 17, 241))"}}>
            <Link to="/" onClick={() => {navigate("/");}} style={{textDecoration: "none", fontSize: "20px", color: "white", marginTop: "20px"}}>
                <img src="./src/assets/New-Logo.png" width="50" height="50" clasName="d-inline-block align-top start-10" alt=""/>
                <strong>SD Dealership</strong>
            </Link>
        </div>

        <div id="menu-box" style={{position :"absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div className="container-fluid" id="sign-in-container" style={{width: "400px"}}>
            <form aonSubmit={handleLogin}>
                <div id="title"><strong>Sign In</strong></div>
                    <div id="input-box">
                        <input type="text" placeholder="Enter Your Email" required style={{textAlign: "center"}}/>
                    <div id="underline"></div>
                </div>

                <div id="input-box">
                    <input type="password" placeholder="Enter Your Password" required style={{textAlign: "center"}}/>
                    <div id="underline"></div>
                </div>

                    <h6 id="box-paragraph">I want to receive updates, special offers, and promotional emails. I understand that I can opt out at any time.</h6>
                    <h6 id="box-paragraph" style={{marginTop: "0px"}}>I agree to the Terms of Service and acknowledge SD Dealership's Privacy Policy</h6>
                
                <div id="input-box" style={{textAlign: "center"}}>
                    <div className="row">
                        <div className="col-lg-6 col-6 col-md-6">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/><h6 style={{fontSize: "15px"}}>Remember Me</h6>
                        </div>
                        <div className="col-lg-6 col-6 col-md-6">
                            <a href="" style={{textDecoration: "none"}}>
                                <h6 id="forgot-password-link">Forgot Password?</h6>
                            </a>
                        </div>
                    </div>
                    <input type="submit" name="" value="Continue"/>
                </div>
            </form>
            </div>
        </div>
        </div>
        </>
    );
}
export default Login;
