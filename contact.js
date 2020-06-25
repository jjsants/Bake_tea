
$().ready(function () {

    $(".submit").click(function (event) {
        // event.preventDefault()
        console.log("clicked buttom")

        var name = $(".name").val()
        var email = $(".email").val()
        var subject = $(".subject").val()
        var message = $(".message").val()
        var statusElem = $(".status")
        statusElem.empty()

        if (name.length >= 2) {
            statusElem.html("<div>Name is valid</div>");
        } else {
            event.preventDefault()
            statusElem.append("<div>Name is not valid</div>");
        }

        if ((email.length) > 5 && email.includes("@") && email.includes(".")) {
            statusElem.append("<div>Email is valid</div>");
        } else {
            event.preventDefault()
            statusElem.append("<div>Email is not valid</div>");
        }

        if (subject.length >= 2) {
            statusElem.append("<div>Subject is valid</div>");
        } else {
            event.preventDefault()
            statusElem.append("<div>Subject is not valid</div>");
        }

        if (message.length >= 10) {
            statusElem.append("<div>Message is valid</div>");
        } else {
            event.preventDefault()
            statusElem.append("<div>Message is not valid</div>");
        }


    });
});
