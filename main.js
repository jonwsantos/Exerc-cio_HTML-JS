const form = document.getElementById('form-acompanhamento');
const vlrA = document.getElementById("campoA");
const vlrB = document.getElementById("campoB");

function calculaNota(notaSemestral) {
    let valorNota = vlrA.value < vlrB.value;
    return valorNota;
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `Parábens, sua nota do <b>segundo semestre</b> é maior que a do <b>primeiro semestre</b>`;
    const mensagemErro = `Infelizmente, sua nota do <b>segundo semestre</b> não superou à do <b>primeiro semestre</b>`;

    formEValido = calculaNota(vlrB.value)
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        const containerMensagemErro = document.querySelector('.error-message').style.display = 'none';
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        const containerMensagemSucesso = document.querySelector('.success-message').style.display = 'none';
    }

    vlrA.value = '';
    vlrB.value = '';
}) 

console.log(form);