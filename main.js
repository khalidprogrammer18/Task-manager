let task = document.querySelector(".input");
let add = document.querySelector('input[type="submit"]');
let arr = []

if (localStorage.getItem("tasks") === "") {
    localStorage.clear()
}

if (localStorage.getItem("tasks")) {
    arr = Array(localStorage.getItem("tasks").split(","))[0]
    localStorage.getItem("tasks").split(",").forEach((mission) => {
        let div = document.createElement("div");
        let del = document.createElement("span");
        del.innerHTML = "Delete";
        div.innerHTML = mission;
        div.appendChild(del);
        document.querySelector(".tasks").append(div);
        del.onclick = function () {
            this.parentElement.remove();
            arr = arr.filter((e) => e !== this.parentElement.firstChild.textContent)
            localStorage.setItem("tasks", arr)
        };
    })
};

add.onclick = function () {
    if (task.value !== "") {
        let div = document.createElement("div");
        let del = document.createElement("span");
        del.innerHTML = "Delete";
        div.innerHTML = task.value;
        arr.push(task.value)
        div.appendChild(del);

        localStorage.setItem("tasks", arr);
        document.querySelector(".tasks").append(div);

        del.onclick = function () {
            this.parentElement.remove();
            arr = arr.filter((e) => e !== this.parentElement.firstChild.textContent)
            localStorage.setItem("tasks", arr)
        };
    };
};