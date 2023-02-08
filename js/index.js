function showPass () {
    const  btnEye = document.querySelector('.password__btn');
    const input = document.querySelector('.password__input');

    btnEye.addEventListener('click', () => {
        btnEye.classList.toggle('active');

        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text')
        } else {
            input.setAttribute('type', 'password')
        }
    })
}

showPass();

//document.querySelector('.btn').onClick = myClick;
let myClick = document.querySelector('.btn');

myClick.addEventListener('click', () => {
    let a = document.querySelector('.input-key').value;
    const wrongWord = document.querySelector('.wrong-word');

    let b = document.querySelector('.password__input').value;
    const wrongPass = document.querySelector('.wrong-pass')

    let c = document.querySelector('.password__confirm').value;
    const wrongConfirm = document.querySelector('.wrong-confirm');

    if (a != 'key') {
        wrongWord.classList.toggle('visible');
    };

    if (b.length < 6) {
        wrongPass.classList.toggle('visible')
    };

    if (c != b || c.length == 0) {
        wrongConfirm.classList.toggle('visible') 
    }
})




/*function showSpan () {
    const wrongWord = document.querySelector('.wrong-word');
    const inputKey = document.querySelector('.input-key').value;

    if (inputKey != "key" && inputKey.length <= 0) {
        wrongWord.classList.toggle('visible')
    }
}

showSpan()*/