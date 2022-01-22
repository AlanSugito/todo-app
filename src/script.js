

document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("#form")
    const submit = form.querySelector(".btn-submit")

    form.addEventListener("submit", function(e){
        e.preventDefault();
        addToDo();
        
    })

    submit.addEventListener("submit", function(e){
        e.preventDefault();
        addToDo();
    })
})