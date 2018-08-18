//Lesson 5 Code
//$("h3").css({border: "3px solid blue"});
//$(".wrapper").css({border: "3px solid red"});
//$("#clients").css({border: "3px solid yellow"});

//Lesson 6
//$("header nav li:first").css({border: "2px solid red"});
//$("header nav li:last").css({border: "2px solid red"});

//$("#contact ul:first").css({border: "2px solid red"});
//$("#contact ul:last").css({border: "2px solid red"});

//$("header nav li:even").css({border: "2px solid blue"});
//$("header nav li:odd").css({border: "2px solid blue"});

//$("section:not('#contact')").css({border: "2px solid green"});

//$("#solcial-nav li:lt(3)").css({border: "2px solid blue"});
//$("#solcial-nav li:gt(2)").css({border: "2px solid blue"});

//$("div[class]").css({border: "2 px solid pink"});

//$("img[alt=quote]").css({border: "2px solid purple"});

//Lesson 7
//$("#contact-methods").next().css({border:"3px solid red"});

//$("#social-nav").prev().css({border:"3px solid blue"});

//$(".banner-title").parents().css({border: "3px solid pink"});

//$("#social-nav").children().css({border: "3px solid green"});

//$("#contact").find(".facebook").css({border: "3px solid purple"});

//$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});

//Lesson 8
//$("#contact-methods").css({border: "2 px solid red"})
//.next().css({border: "2px solid green"})
//.closest("section").css({border: "2px solid blue"});

//Lesson 9
//var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'>The big fight live: Man vs Cheese!</div>";

//$("tweets div").append(tweet);

//$("tweets div").prepend(tweet);

//$("tweets p").before(tweet);

//$("tweets p").after(tweet);

//$("tweets div").html(tweet);

//$("tweets p").text(tweet);

//.append()
//.prepend()
//.before()
//.after()
//.html()
//.text()



//Lesson 10

//$("section").wrap("div");
//$("section").unwrap();
//$("section").wrapAll("div");

//var wrapper = "<div class='wrapper'>";
//var button = $(".button");
//var wrapped = true;

//button[0].onclick = function(){
 // if (wrapped){
 //     $("section").unwrap();
 //     wrapped = false;
 //     button.text("Wrap");
 // }  else{
  //    $("section").wrapAll(wrapper);
//      wrapped = true;
 //   button.text("Wrapped");  
 //     
 // }
    
//};





//wrap()
//unwrap()
//wrapAll()




//Lesson 11
//.empty()
//.remove()

//$(".button").empty();
//$("points-of-sale").empty();
//$(".button").remove();
//$("#contact img").remove();

//Lesson 12
//.removeAttr()
//.attr()

//$("#contact img").removeAttr("alt");
//$("#contact img").attr("alt", "location");
//console.log($("#contact img").attr("alt"));





//Lesson 13
//$("#social-nav").css({
// "top" : "-400px",
// "left" : "150",
// "opactiy" : "0.5",
// "border-top" : "4px solid red"
//});

//Lesson 14
//removeClass()
//addClass()
//toggleClass()

//$("header .wrapper").removeClass("wrapper");
//$("header > div").addClass("wrapper");

//var button = $("lead-banner a");
//button[0].onClick= function(){
// $("points-of-sale").toggleClass("open");
// return false;
//};

//Lesson 15
//on()
//off()

//var myLis = $("points-of-sale li");
//myLis.on("click", function(){
// $(this).css({"background" : "pink"});
 
// myLis.off("click");
 
//});



//Lesson 16
//$("#lead-banner").dlbclick(function(){
// alert("you clicked me");
// $("#lead-banner").off("dblclick");
//});

//Lesson 17
//$(window).load(function(){
// 
// });

//Lesson 18
//$(document).ready(function(){
 
// $("*").on("click", function(e){
  
//  console.log(e.target);
//  console.log("The event type is: " + e.type);
//  console.log("x co-ordinate of the event is:" + e.pageX);
//  console.log("y co-ordinate of the event is:" + e.pageY);
//  e.stopPropagation();
  
// });
 
//});



//Lesson 19
//$(document).ready(function(){

//function complete(){
//   alert("Animation complete");
//}
 
// $("section > h2").on("click", function(){
  
//  $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "linear", complete);
   
//  });
// });
 

//Lesson 20

//$(document).ready(function(){
 
// $("section > h2").on("click", function(){
  
//  $(this).fadeOut(2000).fadeIn(500);
// $(this).fadeTo(200, 0.2)
//        .fadeTo(200, 0.8)
//        .fadeTo(200, 0.2)
  //      .fadeTo(200, 0.8)
    //    .fadeTo(200, 0.2)
      //  .fadeTo(200, 0.8);
  
  
// });
 
//});

//Lesson 21

//$(document).ready(function(){
 //$("img[alt=map]").on("click", function(){
  
  //$(this).hide(1000).show(1000);
 // $("section > h2").toggle(1000);
// });
//});





















































