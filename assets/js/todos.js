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

window.onbeforeunload = function(){
    var lis = $("li");
    var todos = [];
    for(var i = 0; i < lis.length; i++){
        if(lis[i].classList.contains("checked")){
            todos.push(1 + "%%##%%");
        }
        else{
            todos.push(0 + "%%##%%");
        }
        todos.push(lis[i].innerText + "%%##%%");
    }
    todos.push("");
    window.localStorage.setItem("list", todos);
};

window.onload = function(){
    var todosString = window.localStorage.getItem("list");
    var todos = todosString.split("%%##%%,");
    if(todosString.length === 0){
        $("ul").append($("<li><span class='delete'><i class='far fa-trash-alt'></i></span>Create Todo List</li>"));
    }
    else{
        for(var i = 0; i < todos.length-1; i+=2){
            if(todos[i] == "0"){
                $("ul").append($("<li><span class='delete'><i class='far fa-trash-alt'></i></span>" + todos[i+1] + "</li>"));
            }
            else{
                $("ul").append($("<li class='checked'><span class='delete'><i class='far fa-trash-alt'></i></span>" + todos[i+1] + "</li>"));
            }
        }
    }
};


