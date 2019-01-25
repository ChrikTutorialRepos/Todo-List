$("ul").on("click",".delete",(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
}));

$("ul").on("click","li",(function(){
    $(this).toggleClass("checked");
}));

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var input = $(this).val();
        $("ul").append($("<li><span class='delete'><i class='far fa-trash-alt'></i></span> " + input + "</li>"));
        $(this).val("");
    }
});

$(".fa-minus, .fa-plus").on('click touchstart', function(){
    $("input[type='text'").fadeToggle();
    $("input[type='text'").select();
    $(this).fadeOut(250,function(){
        $(this).toggleClass("fa-minus");
        $(this).toggleClass("fa-plus");
        $(this).fadeIn(250);
    });
});

$(".fa-cog").on('click touchstart', function(){
    $("#settings").fadeToggle();
});

$("input[name = 'primary']").on("change", function(event){
    document.documentElement.style.setProperty('--primary', event.target.value);
});

$("input[name = 'b1']").on("change", function(event){
    document.documentElement.style.setProperty('--b1', event.target.value);
});

$("input[name = 'b2']").on("change", function(event){
    document.documentElement.style.setProperty('--b2', event.target.value);
});

window.onbeforeunload = function(){
    var lis = $("li");
    var todos = [];
    var style = getComputedStyle(document.body);
    todos.push(style.getPropertyValue('--primary') + "%%##%%");
    todos.push(style.getPropertyValue('--b1') + "%%##%%");
    todos.push(style.getPropertyValue('--b2') + "%%##%%");
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
    //window.localStorage.clear();
    var todosString = window.localStorage.getItem("list");
    var todos;
    if(todosString == null){
        $("ul").append($("<li><span class='delete'><i class='far fa-trash-alt'></i></span>Create Todo List</li>"));
    }
    else{
        todos = todosString.split("%%##%%,");
        document.documentElement.style.setProperty('--primary', todos[0]);
        $("input[name='primary']")[0].value = todos[0].trim();
        document.documentElement.style.setProperty('--b1', todos[1]);
        $("input[name='b1']")[0].value = todos[1].trim();
        document.documentElement.style.setProperty('--b2', todos[2]);
        $("input[name='b2']")[0].value = todos[2].trim();
        for(var i = 3; i < todos.length-1; i+=2){
            if(todos[i] == "0"){
                $("ul").append($("<li><span class='delete'><i class='far fa-trash-alt'></i></span>" + todos[i+1] + "</li>"));
            }
            else{
                $("ul").append($("<li class='checked'><span class='delete'><i class='far fa-trash-alt'></i></span>" + todos[i+1] + "</li>"));
            }
        }
    }
};


