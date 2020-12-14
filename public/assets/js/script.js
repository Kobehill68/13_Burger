$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // get name user entered on screen
        const newBurger = {
            name: $("#burg").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour-burger").on("click", function (event) {
        event.preventDefault();

        // get id from the screen, from the data-id
        const id = $(this).data("id");
        // devoured!
        const devour = 1; //1 for true

        // pareters to pass to back-end
        const consumed = {
            devoured: devour
        };

        //call back end with id in parameters and data in the body
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: consumed
        }).then((result) => {
            console.log(result);
            location.reload();
        });
    });

    $("#deleteBurger").on("click", function (event) {
        event.preventDefault();
        $.ajax("/api/delete",
            {
                type: "DELETE"
            }
        ).then((result) => {
            console.log(result);
            location.reload();
        });

    });
})