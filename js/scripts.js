function Ticket(movie, age, time ) {
  this.movie = movie,
  this.age = age,
  this.time = time
}

// function displayTicket(ticketToDisplay) {
//   var ticketList = $("ul#prices");
//   var htmlForTicket = "";
//   ticketToDisplay.Ticket.foreach(function(ticket){
//     htmlForTicket += "<li>" + Ticket.movie + " " + Ticket.age + " " + ticket.time + "</li>";
//   })
// }

$(document).ready(function() {
  $("form#ticketForm").submit(function(event) {
    event.preventDefault();
    var movie = $("#movie").val();
    var age = $("#age").val();
    var time = $("#time").val();
    var basePrice = 8; 
    var newTicket = new Ticket(movie, age, time);

    Ticket.prototype.ageDiscount = function() {
      if(this.age === "senior" || this.age === "child") {
        return - 2;
      } else { 
        return 0;
      }
    }
    alert("fuuuuu");
    Ticket.prototype.timeDiscount = function() {
      if (this.time == "11am" || this.time == "1pm"){
        return -2;
    } else {
      return 0;
    }
  }
  
  Ticket.prototype.movieDiscount = function() {
    if (this.movie == "m1" || this.movie == "m2") {
      return - 1;
    }
    else {
      return 0;
  }
  }
  
  Ticket.prototype.getPrice = function() {
    return this.ageDiscount() + this.timeDiscount() + this.movieDiscount() + basePrice;
  }
  
  var ticketPrice = newTicket.getPrice();

  console.log(ticketPrice);
  $("#prices").empty();
  $("#prices").append(ticketPrice);


  // displayTicketPrice(ticketPrice);

  // $("ul#prices").append("<li>" + "ticketPricehaha" + "</Li>");

    // function price(){
    //   if(age == "senior" || age == "child") {
    //     return basePrice - 2;
    //   }
    //   if (time == "11am" || time == "1pm"){
    //     return basePrice - 2;
    //   }
    //   if (movie == "m1" || movie == "m2") {
    //     return basePrice - 1;
    //   }
    //   else {
    //     return basePrice; 
    //   }
    // };

    


  });

  });
