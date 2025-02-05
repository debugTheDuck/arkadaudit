// textarea placeholder
document.getElementById('text').textContent = ''

const servicesWrapper = document.getElementById("servicesWrapper")

// creating services 

// [heading, text, img]
let servicesList = [
    [
        "Полное бухгалтерское сопровождение (НСБУ, МСФО), управленческая отчетность",
        "Мы возьмём на себя рутину учёта, чтобы вы сосредоточились на бизнесе. Быстро решим все вопросы бухучёта и налогов, поможем избежать лишних расходов и вернём входной НДС. Подготовим финансовую и управленческую отчётность с реальными показателями, а также проведём их анализ",
        "photos\\service1.png"
    ],
    [
        "Внутренний Аудит",
        "Сразу получите годовой аудит, чтобы узнать о состоянии учёта. Наша команда сертифицированных специалистов быстро выявит ошибки, поможет их исправить и ответит на вопросы налогового контроля. По итогу года ваши учетные данные будут точными и корректными",
        "photos\\service2.png"
    ],
    [
        "Консультации по налогам и бухгалтерскому учёту",
        "Правильный прогноз будущих сделок сэкономит ваше время и деньги. Наша команда экспертов поможет рассчитать налоги, проверить договоры и консультировать по первичной документации и бухгалтерскому учету. Вы получите письменное объяснение с ссылками на законодательство, а при необходимости наши сотрудники могут приехать к вам в офис",
        "photos\\service3.png"
    ],
    [
        "Подготовка к налоговой проверке, сопровождение проверки",
        "Мы поможем подготовиться к налоговой проверке любого уровня; приведем в порядок бухгалтерский учет, оформим внутренние документы  и пересчитаем налоги. Неготовность к проверке может привести к лишним расходам",
        "photos\\service4.png"
    ],
    [
        "Составление учетных политик для бухгалтерского учета и налогообложения",
        "Вы получите точную информацию в системе 1С о учете имущества, расчетах с поставщиками и покупателями, а также о прибыли вашего бизнеса. Мы исправим налоговые расчеты и предложим оптимальные методы ведения учета, что позволит избежать увеличения штата бухгалтерии",
        "photos\\service5.png"
    ],
    [
        "Бухгалтерский учёт",
        "Вы получите точную информацию в системе 1С о учете имущества, расчетах с поставщиками и покупателями, а также о прибыли вашего бизнеса. Мы исправим налоговые расчеты и предложим оптимальные методы ведения учета, что позволит избежать увеличения штата бухгалтерии",
        "photos\\service6.png"
    ],
    [
        "Реорганизация бизнеса",
        "Проведем реорганизацию в любой форме под ключ с минимальными расходами",
        "photos\\service7.png"
    ],
    [
        "Регистрация, ликвидация",
        "Поможем вам открыть или закрыть бизнес, а также оформить перерегистрацию изменений в учредительных документах. При открытии бизнеса вы получите бесплатную консультацию по правильному составлению учредительных документов, выбору системы налогообложения, покупке 1С и методологии учета. Наша команда обеспечит вам поддержку на каждом этапе, чтобы вы могли сосредоточиться на развитии вашего бизнеса",
        "photos\\service8.png"
    ],
]


window.onload = function() {
    let serviceCounter = 0
    for (service of servicesList){
        serviceCounter++


        // create elements
        const servicesElement = document.createElement("div")
        const servicesText = document.createElement("div")
        const servicesHeading = document.createElement("h3")
        const buttonShowMore = document.createElement("button")
        const buttonShowMoreImg = document.createElement("img")
        const servicesDescription = document.createElement("p")
        const servicesOrder = document.createElement("a")

        const servicesImg = document.createElement("img")


        // add class
        servicesElement.classList.add("servicesElement")
        servicesText.classList.add("servicesText")
        buttonShowMore.classList.add("buttonShowMore")
        servicesOrder.classList.add("buttonBlueReg")
        servicesImg.classList.add("servicesImg")


        // add unique id
        buttonShowMore.id = `serviceButton${serviceCounter}`
        servicesDescription.id = `serviceDescription${serviceCounter}`
        servicesImg.id=`servicesImg${serviceCounter}`


        // add content
        servicesHeading.innerText = service[0]
        servicesDescription.innerText = service[1]
        servicesImg.src = service[2]
        buttonShowMoreImg.src = "photos/arrowDown.svg"
        buttonShowMore.innerText = "Подробнее"
        servicesOrder.innerText = "Заказать услугу"


        // append to the document
        servicesWrapper.appendChild(servicesElement)
        servicesElement.appendChild(servicesText)
        servicesElement.appendChild(servicesImg)
        servicesText.appendChild(servicesHeading)
        servicesText.appendChild(buttonShowMore)
        buttonShowMore.appendChild(buttonShowMoreImg)
        servicesText.appendChild(servicesDescription)
        servicesText.appendChild(servicesOrder)
        servicesElement.appendChild(servicesImg)
    }


    // show more function

    const buttonsShowMore = document.getElementsByClassName("buttonShowMore")
    // add event listener to the all elements of class buttonShowMore
    for (var i = 0; i < buttonsShowMore.length; i++){
        const serviceId = buttonsShowMore[i].id[buttonsShowMore[i].id.length - 1]
        buttonsShowMore[i].addEventListener('click', function () {showService(serviceId)})
    }
}

// pass the NUMBER of id to reveal it
function showService(serviceID) {
    const serviceButton = document.getElementById(`serviceButton${serviceID}`) 
    const serviceDescription = document.getElementById(`serviceDescription${serviceID}`)
    const servicesImg = document.getElementById(`servicesImg${serviceID}`)
    const buttonShowMoreImg = document.createElement("img")
    buttonShowMoreImg.src = "photos/arrowDown.svg"
    if (serviceDescription.style.display!= "block") {
        serviceDescription.style.display = "block"
        serviceButton.innerText = 'Скрыть'
        serviceButton.appendChild(buttonShowMoreImg)
        buttonShowMoreImg.style.transform = "rotate(180deg)"
        servicesImg.style.display = "none"
    } else {
        serviceDescription.style.display = "none"
        serviceButton.innerText = 'Подробнее'
        serviceButton.appendChild(buttonShowMoreImg)
        if (window.innerWidth > 1150) {
            servicesImg.style.display = "block"
        }
    }
}