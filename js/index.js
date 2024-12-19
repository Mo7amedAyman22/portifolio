
let aboutOffSet = $("#about").offset().top;

$(window).scroll(() =>{
    let windowScroll = $(window).scrollTop();

    if(windowScroll > aboutOffSet - 40)
    {
        $("#main-nav").css("backgroundColor" , "rgba(0,0,0,0.5)")
        $("#btn").fadeIn(500)
    }
    else{
        $("#main-nav").css("backgroundColor" , "transparent");
        $("#btn").fadeOut(500);
    }
})
$("#btn").click(()=>{
    $("html , body").animate({scrollTop:'0'} ,2000)
})



$("a").click(function(){
    let aHref =  $(this).attr("href");
    servicesOffSet = $(aHref).offset().top
    $("html , body").animate({scrollTop:servicesOffSet} ,2000)
})


let colorItem = $(".colors"); 

colorItem.click(function(){
    let myColor = $(this).css("backgroundColor");
    $("p , h2 , h1").css("color" , myColor )}) 


colorItem.eq(0).css("backgroundColor" , "orang");
colorItem.eq(1).css("backgroundColor" , "red");
colorItem.eq(2).css("backgroundColor" , "blue");
colorItem.eq(3).css("backgroundColor" , "gray");
colorItem.eq(4).css("backgroundColor" , "yellow");


$("#side-barToggle").click(function(){
    
    let colorBoxWidth = $(".color-item").outerWidth(true);

    if($(".side-bar").css("left") == "0px")
    {
        $(".side-bar").animate({left: `-${colorBoxWidth}`} , 1000)
    }
    else
    {
        $(".side-bar").animate({left: "0px"} , 1000)
    }
})



$(document).ready(function(){
    $(".loader").fadeOut(1000 , function(){
        $(".cover").fadeOut(1000,function(){
            $("body").css("overflow" , "auto" );
                $(".cover").remove();
    })
        })
    })
