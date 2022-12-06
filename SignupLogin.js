const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
};

function signup() {
    // console.log("signup");
    var username = document.getElementById("username").value;
    var email = document.getElementById("useremail").value;
    var pass = document.getElementById("upassword").value;
    var cpass = document.getElementById("confirmpass").value;


    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("upassword").value = "";
    document.getElementById("confirmpass").value = "";

    var uarr = [];
    if ((username !== "") && (email !== "") && (pass !== "") && (cpass !== "")) {
        if (pass == cpass) {
            var obju = {
                username: username,
                email: email,
                pass: pass,
                cpass: cpass

            }

            uarr.push(obju);
            var udata = JSON.parse(localStorage.getItem("usersignup"));
            if (udata == null) {
                localStorage.setItem("usersignup", JSON.stringify(uarr));
            } else {
                var suparr = udata.concat(uarr);
                localStorage.setItem("usersignup", JSON.stringify(suparr));
            }

        } else {
            document.getElementById("err").innerHTML = `<div class="alert alert-danger" role="alert">
                        Please Enter Valid Details....</div> `;

        }

    }
}
signup();

function login() {
    // console.log("login");
    var lusername = document.getElementById("luname").value;
    var lupass = document.getElementById("lupass").value;

    var userldata = JSON.parse(localStorage.getItem("usersignup"));

    for (var i = 0; i < userldata.length; i++) {

        if (lusername !== "" && lupass !== "") {

            if (userldata[i].username == lusername && userldata[i].pass == lupass) {
                console.log("login success");
                window.location = "NowShowing.html";
                let usernameset = userldata[i].username;
                localStorage.setItem("login", JSON.stringify(usernameset));
                break;

            } else {
                document.getElementById("err").innerHTML = `<div class="alert alert-danger" role="alert">
                    Please Enter Valid Details....</div> `;
            }


        } else {
            document.getElementById("err").innerHTML = `<div class="alert alert-danger" role="alert">
                    Please Fill Data ....</div> `;

        }

    }

}
login();
