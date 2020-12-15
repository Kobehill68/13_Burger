$(function () {
    $(".devour").on("click", function() {
        const id = $(this).data("id");
        // const devour = $(this).data("devour");
    
        const devouredBurger = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredBurger
        }).then(() => {          
            location.reload();
          }
        );
    });
    
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();  
        const newBurger = {
          burger_name: $("#burger").val().trim(),        
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(() => {
            console.log("created new burger");          
            location.reload();
          }
        );
    });


})
