/*Toggles the class of the <header> element when the user clicks on the tag DIV#toggle_header:*/
/*$("DIV#toggle_header").click(function (toggleRed)
        if($("header").hasClass("green"))
            ($"header").removeClass("green");
        else 
            $("header").addClass("red");
    })*/
  $("DIV#toggle_header").click(function () {
    $("header").toggleClass("red green");
  });
