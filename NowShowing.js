    //<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    //    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    //    crossorigin="anonymous"></script>
    //<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    //    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    //    crossorigin="anonymous"></script>
    //<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    //    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    //    crossorigin="anonymous"></script>




    function gobook(moviname) {
        var loginuserid = JSON.parse(localStorage.getItem("login"));
        // console.log(loginuserid);
        var arrmovi = []


        if ((loginuserid == null) || (loginuserid == undefined)) {
            console.log("not going to book");
            document.getElementById("modeout").innerHTML = 
            `<div class="modal fade" id="exampleModal" 
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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