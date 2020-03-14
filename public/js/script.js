console.log("hello");

$(function(){
    $(".devour").on("click", function() {
        let id = $(this).data("id");
        let newEaten = $(this).data("neweaten");

        let newEatenState = {
            devoured: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function(){
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        let newBurg = {
          burger_name: $("#name").val().trim(),
          devoured:0
        };
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurg
        }).then(
          function() {
            location.reload();
          }
        );
      });
})
