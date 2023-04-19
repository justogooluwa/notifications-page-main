let button = document.getElementById("read");
let btn = document.getElementById("read");

button?.addEventListener("click", function(){
    document.querySelectorAll(".single-box").forEach(function (i) {
            i.classList.remove("unseen");
            event?.preventDefault();
        })
    document.querySelectorAll(".dot").forEach(function (i) {
            i.classList.remove("dot");
            event?.preventDefault();
        });

    document.getElementById("num").innerText = "0";
})

btn?.addEventListener("click", function () {
        btn.textContent = "Mark all as unread"; 
        btn?.addEventListener("click", function(){
            document.querySelectorAll(".single-box").forEach(function (i) {
                    i.classList.add("unseen");    
                })
                document.querySelectorAll("span").forEach(function (i) {
              i.classList.add("dot");
                })
                document.getElementById("num").innerText = "7";
        })
    })


    




