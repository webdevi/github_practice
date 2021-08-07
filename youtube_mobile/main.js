const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const actions = document.querySelector('.info .actions button i')

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

actions.addEventListener('click', () => {
    actions.classList.toggle('active');
});
