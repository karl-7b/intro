history.scrollRestoration = "manual";

const markers = document.querySelectorAll('.marker');

const menuItems = document.querySelectorAll('.sidebar a');

    menuItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // 1. 기존에 active 클래스가 있던 요소에서 클래스 제거
            menuItems.forEach(link => link.classList.remove('active'));

            // 2. 현재 클릭한 요소에 active 클래스 추가
            this.classList.add('active');

            // 대응 span의 절대좌표
            //let marker = markers[index];
            //let get = getabitem.parentElement

            // 이동
            //document.querySelector(".main-area").scrollTo({top: markers[index].top, left: 0, behavior: 'smooth'});
            markers[index].scrollIntoView({behavior: 'smooth'});
        });
    });

const logo = document.querySelector(".logo");

logo.addEventListener('click', function() {
    document.querySelector(".main-area").scrollTo({top: 0, left: 0, behavior: 'smooth'});
});