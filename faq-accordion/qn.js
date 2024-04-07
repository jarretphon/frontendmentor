export const Faqs = [
    {
        qn: 'What is Frontend Mentor, and how will it help me?',
        ans: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        qn: 'Is Frontend Mentor free?',
        ans: " Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        qn: 'Can I use Frontend Mentor projects in my portfolio?',
        ans: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        qn: "How can I get help if I'm stuck on a challenge?",
        ans: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
]

export function getFaqContent(faqs) {
    let faqHTML = "";
    let is_expanded = 'expanded';
    faqs.forEach((qna) => {
        faqHTML += `
        <div class="qn-ans">
            <div class="qn">
                <p class="qn-text js-qn-text">${qna.qn}</p>
                <img class="expander plus-sign js-expander" src="assets/images/icon-plus.svg" alt="expander">
                <img class="expander minus-sign js-close" src="assets/images/icon-minus.svg" alt="expander">
            </div>
            <div class="ans ${is_expanded} js-ans">${qna.ans}</div>
        </div>
        `;
        is_expanded = '';
    });
    return faqHTML;
}
