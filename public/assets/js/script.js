$(function () {
    $(".eat-burger").on("click", (event) => {
        console.log("click working")
        let id = $(this).data("id");
        $.ajax("api/burgers/" + id, {
            type: "PUT"
        }).then(() => {

            console.log("changed devour to", id);
         
            location.reload();
        });
    });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        let newBurger = { burger_name: $("#bgr").val().trim(), devoured: 0, }
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created new burger");
            location.reload();
        });
    });

    $(".delete-burger").on("click", (event) => {
        
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log("deleted burger", id);
            
            location.reload();
        });
    });


})