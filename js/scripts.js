function Ticket(movie, age, time ) {
  this.movie = movie,
  this.age = age,
  this.time = time
}

$(document).ready(function() {
  attachContactListeners();
  $("form#nticketform").submit(function(event) {
    event.preventDefault();
    var movie = $("#movie").val();
    var age = $("#age").val();
    var time = $("#time").val();
    var basePrice = 8; 

    function price(){
      if(age == "senior" || age == "child") {
        return basePrice - 2;
      }
      if (time == "11am" || time == "1pm"){
        return basePrice - 2;
      }
      if (movie == "m1" || movie == "m2") {
        return basePrice - 1;
      }
      else {
        return basePrice; 
      }
    };
  
  Ticket.prototype.ageDiscount = function() {
    if(age === "senior" || age == "child") {
      return basePrice - 2;
    } else { return 0
    }
  }


    price();

    $("#output").text()
  });

  });