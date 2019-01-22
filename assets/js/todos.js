$("ul").on("click",".delete",(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
}));

$("ul").on("click","li",(function(){
    $(this).toggleClass("checked");
}));

$("input").keypress(function(e){
    if(e.which === 13){
        var input = $(this).val();
        $("ul").append($("<li><span class='delete'><i class='far fa-trash-alt'></i></span> " + input + "</li>"));
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});

