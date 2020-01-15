window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.navigation').classList.add('solid')
    }
    else {
        document.querySelector('.navigation').classList.remove('solid')
    }
}



document.querySelector('#navicon').onclick = () => alert("·YAY!!!")