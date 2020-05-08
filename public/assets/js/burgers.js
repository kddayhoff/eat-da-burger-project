// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-burger").on("click", function(event) {
      
      var id = $(this).data("id");
      var devourBurger = $(this).data("devourburger");
  
      var newDevouredBurger = {
        devoured: devourBurger
      };
  
      // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredBurger
      }).then(
        function() {
          console.log("changed devoured to", devourBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bur").val(),
        devoured: 0
      };
  
      // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  