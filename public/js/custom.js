if(document.URL === 'http://localhost/pwbs/posts/create'){
    const title = document.getElementById('title')
    title.value = localStorage.getItem("title") // get and assign the value outside
    title.onchange = function () {
        const new_title = title.value
        localStorage.setItem('title', new_title)
    }

    $('form').on('submit', function (){
        localStorage.setItem('title', '')
    })
}