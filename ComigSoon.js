function gobook(moviname) {
    var loginuserid = JSON.parse(localStorage.getItem("login"));
    // console.log(loginuserid);
    var arrmovi = []


    if ((loginuserid == null) || (loginuserid == undefined)) {
        console.log("not going to book");
        document.getElementById("modeout").innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">You Not Sign Up or Sign In</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                Please Sign Up || Sign In and then Book Seat...
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <a href="user.html"><button type="button" class="btn btn-primary">GoTo SignUp</button></a>
                            </div>
                        </div>
                        </div>
                    </div>`;




    } else {

        var seatprice = document.getElementById(moviname).dataset.price;

        var moviname = document.getElementById(moviname).value;
        // console.log(loginuserid);

        console.log(moviname);
        console.log(seatprice);


        var object = {
            moviname: moviname,
            price: seatprice

        }

        arrmovi.push(object);

        localStorage.setItem("moviedata", JSON.stringify(arrmovi));
        window.location = "BookNow.html";
        console.log("book seat");
    }

}
        // gobook();