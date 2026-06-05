let list = document.querySelectorAll('ul li');
let dataChange = document.querySelectorAll('.cardBlack p');


list.forEach((e, index) => {
    e.addEventListener('click', function () {
        list.forEach(e => {
            e.classList.remove("active");
        })
        e.classList.add("active");

        dataChange.forEach(p => {
            p.classList.remove("active");
        })

        dataChange[index].classList.add("active");

    })
});