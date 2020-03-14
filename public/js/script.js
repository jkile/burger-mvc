console.log("hello");

$(function(){
    $(".devour").on("click", function(event) {
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
        )
    })



})
