const stayLoginBtn = document.querySelector('.mainContainer .mainWrap .loginOptionWrap .stayLogin');
const stayLoginI = document.querySelector('.mainContainer .mainWrap .loginOptionWrap .stayLogin i')

stayLoginBtn.addEventListener('click', () => {
    stayLoginI.classList.toggle('active');
});
