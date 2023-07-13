//modal
const buttonModal = document.querySelector('[data-modal]');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('[data-close]');



buttonModal.addEventListener('click', () => {
    modal.classList.add('show', 'fade');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
});
closeModal.addEventListener('click', () =>{
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
});
modal.addEventListener('click', (e) =>{
    if(e.target === modal){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
});
document.addEventListener('keydown', (e) =>{
    if(e.code === "Escape"){
        modal.classList.add('hide');
        modal.classList.remove('show');
    }
});




// timer
const deadline = '2023-03-03';

function setGetTimer(endtime){
    const r = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(r / (1000 * 60 * 60 * 24));
    const hours = Math.floor((r / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((r / 1000 / 60) % 60);
    const seconds = Math.floor((r / 1000) % 60);

    return  {
        'finish': r,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function backSetClock(selector, endtime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeSetInterval = setInterval(updateSetTimer, 1000);

    updateSetTimer();


    function updateSetTimer(){
        const r = setGetTimer(endtime);

        days.innerHTML = r.days;
        hours.innerHTML = r.hours;
        minutes.innerHTML = r.minutes;
        seconds.innerHTML = r.seconds;

        if(r.finish <= 0){
            clearInterval(timeSetInterval);
        }
    }
}
backSetClock('.timer', deadline);

//tabы
const tabsHeader = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');
const tabsHeaderParent = document.querySelector('.tabheader__items');

function visibleOffTab(){
    tabsContent.forEach(item =>{
        item.classList.add('hide');
        item.classList.remove('show');
    });
    tabsHeader.forEach(item =>{
        item.classList.remove('.tabheader__item_active');
    });
}

function visibleOnTab(i = 0){
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabsHeader[i].classList.add('tabheader__item_active');
}
visibleOffTab();
visibleOnTab();
tabsHeaderParent.addEventListener('click', (event) =>{
    target = event.target;
    if(target && target.classList.contains('tabheader__item')){
        tabsHeader.forEach((item, i) =>{
            if(target == item){
                visibleOffTab();
                visibleOnTab(i);
            }
        })
    }
});


const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.menu_close');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () =>{
    header.classList.add('active');
    document.body.style.overflow = 'hidden';
});
closeMenu.addEventListener('click', () =>{
    header.classList.remove('active');
    document.body.style.overflow = '';
});


