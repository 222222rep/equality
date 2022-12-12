
const uaNav1 = document.querySelector('.uaNav1');
const uaNav2 = document.querySelector('.uaNav2');
const uaNav3 = document.querySelector('.uaNav3');
const uaNav4 = document.querySelector('.uaNav4');
const uaNav5 = document.querySelector('.uaNav5');

const uaMain_subtitle = document.querySelector('.uaMain_subtitle');
const gal_button = document.querySelector('.gal_button');
const uaAbout = document.querySelector('.uaAbout');
const uaAboutFlex = document.querySelector('.uaAboutFlex');
const uaAboutFlex2 = document.querySelector('.uaAboutFlex2');


const uaServiceHotel = document.querySelector('.uaServiceHotel');
const uaServiceHall = document.querySelector('.uaServiceHall');
const uaServiceCafe = document.querySelector('.uaServiceCafe');
const uaServiceBilliards = document.querySelector('.uaServiceBilliards');
const uaServiceSauna = document.querySelector('.uaServiceSauna');


const uaButtonIndex = document.querySelector('.uaButtonIndex');


const uaSectionHeading = document.querySelector('.uaSectionHeading');
const subHeading = document.querySelector('.subHeading');
const uaQuestion = document.querySelector('.uaQuestion');
const uaAnswer = document.querySelector('.uaAnswer');



document.getElementById('s1').onchange = () => {

    if (uaNav1.innerHTML === 'about us') {
        uaNav1.innerHTML = 'про нас'
    } else {
        uaNav1.innerHTML = 'about us'
    };

    if (uaNav2.innerHTML === 'rooms') {
        uaNav2.innerHTML = 'кімнати'
    } else {
        uaNav2.innerHTML = 'rooms'
    };

    if (uaNav3.innerHTML === 'services') {
        uaNav3.innerHTML = 'послуги'
    } else {
        uaNav3.innerHTML = 'services'
    };

    if (uaNav4.innerHTML === 'eat&drink') {
        uaNav4.innerHTML = 'меню'
    } else {
        uaNav4.innerHTML = 'eat&drink'
    };

    if (uaNav5.innerHTML === 'contact') {
        uaNav5.innerHTML = "зв'язок"
    } else {
        uaNav5.innerHTML = 'contact'
    };


    if (uaMain_subtitle.innerHTML === 'HOTEL COMPLEX') {
        uaMain_subtitle.innerHTML = 'ГОТЕЛЬНИЙ КОМПЛЕКС'
    } else {
        uaMain_subtitle.innerHTML = 'HOTEL COMPLEX'
    };

    if (gal_button.innerHTML === 'go to the gallery') {
        gal_button.innerHTML = 'перейти до галереї'
    } else {
        gal_button.innerHTML = 'go to the gallery'
    };

    if (uaAbout.innerHTML === 'is an independent hotel complex with an exceptional sense of style, character and award-winning service. The complex is located in the heart of the old but dynamic city of Znamyanka, a few meters from the central station.') {
        uaAbout.innerHTML = '— це незалежний готельний комплекс з винятковим почуттям стилю, характером і відзначеним нагородами сервісом. Комплекс розташований у самому серці старого, але динамічного міста Знамянка, за декілька метрів від центрального вокзалу.'
    } else {
        uaAbout.innerHTML = 'is an independent hotel complex with an exceptional sense of style, character and award-winning service. The complex is located in the heart of the old but dynamic city of Znamyanka, a few meters from the central station.'
    };

    if (uaAboutFlex.innerHTML === 'Each of the 50 rooms and suites of the 11 Mirrors design hotel is inspired by modern interior design with a deep understanding of global trends and innovative concepts. Smart elegance without heavy elements or imperial exaggerations creates a creative environment that inspires and encourages genuine interaction, and the hotel staff provides exceptional service.') {
        uaAboutFlex.innerHTML = 'Кожен із 50 номерів і люксів дизайн-готелю 11 Mirrors черпає натхнення в сучасному дизайні інтер’єру з глибоким розумінням світових тенденцій та інноваційних концепцій. Розумна елегантність без важких елементів та імперських перебільшень створює творче середовище, яке надихає та заохочує до справжньої взаємодії, а персонал готелю надає послуги виняткової якості.'
    } else {
        uaAboutFlex.innerHTML = 'Each of the 50 rooms and suites of the 11 Mirrors design hotel is inspired by modern interior design with a deep understanding of global trends and innovative concepts. Smart elegance without heavy elements or imperial exaggerations creates a creative environment that inspires and encourages genuine interaction, and the hotel staff provides exceptional service.'
    };

    if (uaAboutFlex2.innerHTML === 'Each of the 50 rooms and suites of the 11 Mirrors design hotel is inspired by modern interior design with a deep understanding of global trends and innovative concepts. Smart elegance without heavy elements or imperial exaggerations creates a creative environment that inspires and encourages genuine interaction, and the hotel staff provides exceptional service.') {
        uaAboutFlex2.innerHTML = 'Кожен із 50 номерів і люксів дизайн-готелю 11 Mirrors черпає натхнення в сучасному дизайні інтер’єру з глибоким розумінням світових тенденцій та інноваційних концепцій. Розумна елегантність без важких елементів та імперських перебільшень створює творче середовище, яке надихає та заохочує до справжньої взаємодії, а персонал готелю надає послуги виняткової якості.'
    } else {
        uaAboutFlex2.innerHTML = 'Each of the 50 rooms and suites of the 11 Mirrors design hotel is inspired by modern interior design with a deep understanding of global trends and innovative concepts. Smart elegance without heavy elements or imperial exaggerations creates a creative environment that inspires and encourages genuine interaction, and the hotel staff provides exceptional service.'
    };


    if (uaServiceHotel.innerHTML === 'Hotel "TORTUGA"') {
        uaServiceHotel.innerHTML = 'Готель "TORTUGA"'
    } else {
        uaServiceHotel.innerHTML = 'Hotel "TORTUGA"'
    };

    if (uaServiceHall.innerHTML === 'Banquet hall') {
        uaServiceHall.innerHTML = 'Банкетний зал'
    } else {
        uaServiceHall.innerHTML = 'Banquet hall'
    };

    if (uaServiceCafe.innerHTML === 'Cafe') {
        uaServiceCafe.innerHTML = 'Кафе'
    } else {
        uaServiceCafe.innerHTML = 'Cafe'
    };

    if (uaServiceBilliards.innerHTML === 'Billiards') {
        uaServiceBilliards.innerHTML = 'Більярд'
    } else {
        uaServiceBilliards.innerHTML = 'Billiards'
    };

    if (uaServiceSauna.innerHTML === 'Sauna') {
        uaServiceSauna.innerHTML = 'Сауна'
    } else {
        uaServiceSauna.innerHTML = 'Sauna'
    };


    if (uaButtonIndex.innerHTML === 'Send') {
        uaButtonIndex.innerHTML = 'Відправити'
    } else {
        uaButtonIndex.innerHTML = 'Send'
    };


    if (uaSectionHeading.innerHTML === 'Frequently asked questions') {
        uaSectionHeading.innerHTML = 'Питання що часто задаються'
    } else {
        uaSectionHeading.innerHTML = 'Frequently asked questions'
    };

    if (subHeading.innerHTML === 'Here are some of our frequently asked questions. If you have any other questions answered, please email us.') {
        subHeading.innerHTML = 'Ось деякі з наших поширених запитань. Якщо у вас виникнуть інші запитання відповіли, будь ласка, надішліть нам електронний лист.'
    } else {
        subHeading.innerHTML = 'Here are some of our frequently asked questions. If you have any other questions answered, please email us.'
    };

    if (uaQuestion.innerHTML === 'how to book a hotel room') {
        uaQuestion.innerHTML = 'як забронювати номер в готелі'
    } else {
        uaQuestion.innerHTML = 'how to book a hotel room'
    };

    if (uaAnswer.innerHTML === 'Services>Hotel') {
        uaAnswer.innerHTML = 'Послуги>Готель'
    } else {
        uaAnswer.innerHTML = 'Services>Hotel'
    };




};