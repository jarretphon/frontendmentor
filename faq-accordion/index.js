import { Faqs, getFaqContent } from "./qn.js";

const faqHTML = getFaqContent(Faqs)
document.querySelector('.faq-content').innerHTML = faqHTML;

document.querySelectorAll('.js-qn-text, .js-expander, .js-close').forEach((btn) => {
    btn.addEventListener('click', () => {
        const answer = btn.parentElement.nextElementSibling;
        const [expand, close] = getExpander(btn)
        toggleAnsView(answer, close, expand);
    })
});


function getExpander(btn) {
    let expand;
    let close;
    if (btn.classList.contains('js-close')) {
        expand = btn.previousElementSibling;
        close = btn;
    } else if (btn.classList.contains('js-expander')) {
        expand = btn;
        close = btn.nextElementSibling;
    }
    else {
        expand = btn.nextElementSibling;
        close = expand.nextElementSibling;
    }
    return [expand, close];
}


function toggleAnsView(answer, close, expand) {
    if (answer.classList.contains('expanded')){
        answer.classList.remove('expanded');
        close.style.display = 'none';
        expand.style.display = 'initial';
    }else{
        answer.classList.add('expanded')
        close.style.display = 'initial';
        expand.style.display = 'none';
    };
};

