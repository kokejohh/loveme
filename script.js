const words = ['ไม่เป็น', 'แน่ใจหรอ', 'คิดอีกที', 'ไม่เป็นจริง ๆ หรอ', 'ให้โอกาสคิดอีกที',
    'เสียใจนะ', 'จะร้องไห้ละ', 'ใจดวงนี้กำลังสลาย', 'เอื้อออ', 'ขอความเห็นใจ',
    'ปุ่มสีเขียวน่ากดจัง', 'ไม่หลงกลหรอ', 'คนน่ารักมักใจร้าย', 'ฮั่นแน่ ใจอ่อนยัง', 'ใกล้แล้วสินะ',
    'ปุ่มจะเต็มจอแล้วนะ', 'อะๆ ให้โอกาส', 'นี่ก็ให้โอกาส คิดอีกที', 'โอกาสสุดท้าย', 'นี่สุดท้ายของจริง', 'อันนี้ของจริงยิ่งกว่า'];
let indexWord = 0;

let no = document.querySelector('#no');
let yes = document.querySelector('#yes');

yesTxt.style.fontSize = ''+ getComputedStyle(yesTxt).fontSize;
no.addEventListener('click', (e) => {
    yesTxt.style.fontSize = `${parseFloat(yesTxt.style.fontSize) * 1.2}px`;
    noTxt.innerText = words[++indexWord % words.length];
    
    if (indexWord % 2 == 0) { question.classList.toggle('animate__shakeY'); }
    if (indexWord > words.length - 1) { no.remove(); }
});

yes.addEventListener('click', (e) => {
    yes.disabled = true;
    if (no) { no.disabled = true; }

    let body = document.querySelector('body');
    let img = document.createElement('img');

    img.src = 'https://media.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif';
    img.style.position = 'fixed';
    img.style.top = 0;
    img.classList.add('animate__animated', 'animate__fadeIn');
    body.appendChild(img);
    setTimeout(() => {
        body.classList.add('animate__animated', 'animate__bounceIn');
        let img = document.createElement('img');
        img.src = 'https://media.tenor.com/yUpYL9_ERj4AAAAi/peach-goma.gif';
        img.width = 250;
        body.innerHTML = '';
    
        let h1 = document.createElement('h1');
        h1.textContent = 'เป็นแฟนกันแล้วนะ';
        body.appendChild(img);
        body.appendChild(h1);
    }, 650);
});