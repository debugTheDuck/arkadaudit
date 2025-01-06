const topNavButton1 = document.getElementById("topNavButton1")
const topNavButton2 = document.getElementById("topNavButton2")
const topNavButton3 = document.getElementById("topNavButton3")
const topNavButton4 = document.getElementById("topNavButton4")

const mainHeading = document.getElementById("mainHeading")

const company = document.getElementById("company")
const team = document.getElementById("team")
const partners = document.getElementById("partners")
const feedbacks = document.getElementById("feedbacks")


// NAV
navDict = {
    "topNavButton1": [company, "Arkad Audit"],
    "topNavButton2": [team, "Наша команда"],
    "topNavButton3": [partners, "Партнёры и клиенты"],
    "topNavButton4": [feedbacks, "Отзывы"],
}

function topNav(buttonNo) {
    topNavButton1.setAttribute("isActive", "false")
    topNavButton2.setAttribute("isActive", "false")
    topNavButton3.setAttribute("isActive", "false")
    topNavButton4.setAttribute("isActive", "false")

    buttonNo.setAttribute("isActive", "true")

    company.style.display = "none"
    team.style.display = "none"
    partners.style.display = "none"
    feedbacks.style.display = "none"

    teamCV.style.display = "none"

    navInfo = navDict[buttonNo.id]

    navInfo[0].style.display = "flex"
    mainHeading.innerText = navInfo[1]
}

topNavButton1.addEventListener('click', function () {topNav(topNavButton1)})
topNavButton2.addEventListener('click', function () {topNav(topNavButton2), teamLoading()})
topNavButton3.addEventListener('click', function () {topNav(topNavButton3)})
topNavButton4.addEventListener('click', function () {topNav(topNavButton4), feedbacksLoading()})

// NAV adaptation
function navAdaptation(x) {
    if (x.matches) {
        topNavButton1.innerText = "О нас"
        topNavButton3.innerText = "Партнёры"
    } else {
        topNavButton1.innerText = "О компании"
        topNavButton3.innerText = "Партнёры и клиенты"
    }
}

const x = window.matchMedia("(max-width: 650px")
navAdaptation(x)

x.addEventListener("change", function() {
    navAdaptation(x)
})


// creating CVs from list [img path, name, job, xp]
const teamWrapper = document.getElementById("teamWrapper")

const cvList = [
    ["photos\\team\\resized\\NatTur.png", "Туралинова Наталья", "директор", 2007, 1974, ["photos\\certificates\\NatalyaTuralinova1.png", "photos\\certificates\\NatalyaTuralinova2.png", 'photos\\certificates\\natTurCertificate.jpg', 'photos\\certificates\\NatalyaTuralinova4.png']],
    ["photos\\team\\resized\\AFANASEVAý ANASTASIYA-transformed.jpeg", "Афанасьева Анастасия", "Бухгалтер", 2015, 1992, ["photos\\certificates\\AFANASEVA ANASTASIYA1.png"]],
    ["photos\\team\\resized\\BURENINA_YELENA-transformed.jpeg", "Буренина Елена", "Главный бухгалтер", 2013, 1970, ["photos\\certificates\\BURENINA YELENA1.png", "photos\\certificates\\BURENINA YELENA2.png", "photos\\certificates\\BURENINA YELENA3.png"]],
    ["photos\\team\\resized\\DAVLYATOVA_YULIYA-transformed.jpeg", "Давлятова Юлия", "Бухгалтер, ВЭД", 2021, 1985, ["photos\\certificates\\DAVLYATOVA YULIYA1.png"]],
    ["photos\\team\\resized\\IRGASHXODJAYEVAý AREVIKý -transformed.jpeg", "Иргашгоджаева Аревик", "Главный бухгалтер", 2020, 1992, []],
    ["photos\\team\\resized\\KADIROVA_MARIANNA_MARSOVNA-transformed.jpeg", "Кадирова Марианна", "Менеджер проекта МСФО", 2013, 1988, ["photos\\certificates\\Kadirova M.1.png", "photos\\certificates\\Kadirova M.2.png"]],
    ["photos\\team\\resized\\KIM_OLGA_EDUARDOVNA-transformed.jpeg", "Ким Ольга", "Главный бухгалтер", 2023, 1993, ["photos\\certificates\\Kim O.1.png"]],
    ["photos\\team\\resized\\KUTISHEVA_ALLA-transformed.jpeg", "Кутишева Алла", "Главный бухгалтер", 2021, 1976, ["photos\\certificates\\KUTISHEVA ALLA1.png", "photos\\certificates\\KUTISHEVA ALLA2.png", "photos\\certificates\\KUTISHEVA ALLA3.png", "photos\\certificates\\KUTISHEVA ALLA4.png", "photos\\certificates\\KUTISHEVA ALLA5.png", "photos\\certificates\\KUTISHEVA ALLA6.png",]],
    ["photos\\team\\resized\\MAKSUMOVA_GULNOZA-transformed.jpeg", "Максумова Гульноза", "Бухгалтер", 2024, 1990, ["photos\\certificates\\Maksumova Gulnoz1.png"]],
    ["photos\\team\\resized\\MIXAYLYANSý NATALIYAý ANATOLEVNA-transformed.jpeg", "Михайлянц Наталья", "Главный бухгалтер", 2022, 1978, ["photos\\certificates\\MIXAYLYANS NATALIYA1.png"]],
    ["photos\\team\\resized\\MUSAYEVA_DILBAR_TALGATOVNA-transformed.jpeg", "Мусаева Дильбар", "Главный бухгалтер", 2019, 1977, []],
    ["photos\\team\\resized\\MUXTARXODJAYEVAý ALINAý VALEREVNAý -transformed.jpeg", "Мухтарходжаева Алина", "Главный бухгалтер", 2021, 2000, ["photos\\certificates\\MUXTARXODJAYEVA  ALINA1.png"]],
    ["photos\\team\\resized\\Ogay_Oksana_Robertovnaý -transformed.jpeg", "Огай Оксана", "Менеджер проекта внутреннего аудита", 2019, 1990, ["photos\\certificates\\Ogay Oksana1.png", "photos\\certificates\\Ogay Oksana2.png", "photos\\certificates\\Ogay Oksana3.png"]],
    ["photos\\team\\resized\\PERESIPKINA_REZIDA_TEMIRGALIYEVNAý -transformed.jpeg", "Пересыпкина Резида", "Менеджер проекта аутсорса", 2018, 1982, ["photos\\certificates\\Peresipkina Rezida1.png", "photos\\certificates\\Peresipkina Rezida2.png", "photos\\certificates\\Peresipkina Rezida3.png","photos\\certificates\\Peresipkina Rezida4.png","photos\\certificates\\Peresipkina Rezida5.png",]],
    ["photos\\team\\resized\\Ruzmetova_Rano-transformed.jpeg", "Рузметова Рано", "Главный бухгалтер, менеджер проекта общепит", 2019, 1975, ["photos\\certificates\\Ruzmetova Rano1.png", "photos\\certificates\\Ruzmetova Rano2.png",]],
    ["photos\\team\\resized\\SHUKUROVAý LYUTFIYE-transformed.jpeg", "Шукурова Лютфие", "Бухгалтер", 2016, 1985],
    ["photos\\team\\resized\\TRIODINA_ANASTASIYA_ANDREYEVNA_ý -transformed.jpeg", "Триодина Анастасия", "Главный бухгалтер", 2022, 1993, ["photos\\certificates\\Triodina Anastasiya1.png"]],
    ["photos\\team\\resized\\USHAKOVA_TATYANA_VASILEVVNA-transformed.jpeg", "Ушакова Татьяна", "Главный бухгалтер", 2021, 1966, ['photos\\certificates\\USHAKOVA TATYANA1.png', "photos\\certificates\\USHAKOVA TATYANA2.png", "photos\\certificates\\USHAKOVA TATYANA3.png"]],
    ["photos\\team\\resized\\Xan_Tatyana_Vitalevna-transformed.jpeg", "Хан Татьяна", "Менеджер проекта восстановления", 2019, 1996, ["photos\\certificates\\Xan Tatyana1.png", "photos\\certificates\\Xan Tatyana2.png", "photos\\certificates\\Xan Tatyana3.png"]],
    ["photos\\team\\TASHPULATOV RUSLAN MARATOVICH .jpg", "Ташпулатов Руслан", "Менеджер проекта МСФО", 2024, 1995]
]

function teamLoading() {
    //delete previous elements
    teamWrapper.innerHTML=""
    for (const cv of cvList) {
        // create elements
        const teamElement = document.createElement("div")
        const teamImgWrapper = document.createElement("div")
        const teamImg = document.createElement("img")
        const teamText = document.createElement("div")
        const teamHeading = document.createElement("h4")
        const teamPost = document.createElement("p")
        const teamXP = document.createElement("p")
        const teamBr = document.createElement("br")
        const teamCertificate = document.createElement("a")

        // add class
        teamElement.classList.add("teamElement")
        teamImgWrapper.classList.add("teamImgWrapper")
        teamText.classList.add("teamText")
        teamCertificate.classList.add("certificatesButton")

        // add content
        teamImg.src = cv[0]
        teamHeading.textContent = cv[1]
        teamPost.textContent = cv[2]
        teamXP.textContent = "Опыт работы: с " + cv[3]
        teamCertificate.textContent = "Сертификаты"
        teamCertificate.id = cv[1]
    
        // append to the document
        teamWrapper.appendChild(teamElement)
        teamElement.appendChild(teamImgWrapper)
        teamImgWrapper.appendChild(teamImg)
        teamElement.appendChild(teamText)
        teamText.appendChild(teamHeading)
        teamText.appendChild(teamPost)
        teamText.appendChild(teamXP)
        teamText.appendChild(teamBr)
        teamText.appendChild(teamCertificate)
    }

    // creating singular CV
    const certificatesButton = document.getElementsByClassName("certificatesButton")

    // add event listener to the all elements of class certificatesButton
    for (var i = 0; i < certificatesButton.length; i++){
        const CVid = certificatesButton[i].id
        certificatesButton[i].addEventListener('click', function () {createCV(CVid)})
    }
}


// showing CV. Cvid == name of CV owner
const teamCV = document.getElementById("teamCV")
const CVWrapper = document.getElementById("CVWrapper")
const CVCertificatesWrapper = document.getElementById("CVCertificatesWrapper")

function createCV(CVid) {
    console.log(CVid)
    CVWrapper.innerHTML=""
    CVCertificatesWrapper.innerHTML=""
    teamCV.style.display = "flex"
    team.style.display = "none"
    for (const cv of cvList) {
        if (cv[1] == CVid) {
            // create elements
            const CVImgWrapper = document.createElement("div")
            const CVImg = document.createElement("img")
            const CVText = document.createElement("div")
            const CVHeading = document.createElement("h2")
            const CVBr = document.createElement("br")
            const CVPost = document.createElement("p")
            const CVPostBold = document.createElement("b")
            const CVXP = document.createElement("p")
            const CVXPBold = document.createElement("b")
            const CVAge = document.createElement("p")
            const CVAgeBold = document.createElement("b")


            // add class
            CVImgWrapper.classList.add("CVImgWrapper")
            CVText.classList.add("CVText")


            // add content
            CVImg.src = cv[0]
            CVHeading.textContent = cv[1]
            CVPostBold.textContent = "Должность: "
            CVXPBold.textContent = "Опыт работы: "
            CVAgeBold.textContent = "Возраст: "
            CVPost.textContent = cv[2]
            CVXP.textContent = `с ${cv[3]}`
            CVAge.textContent = `${countAge(cv[4])}`

            // append to the document
            CVWrapper.appendChild(CVImgWrapper)
            CVImgWrapper.appendChild(CVImg)
            CVWrapper.appendChild(CVText)

            CVPost.appendChild(CVPostBold)
            CVXP.appendChild(CVXPBold)
            // CVAge.appendChild(CVAgeBold)

            CVText.appendChild(CVHeading)
            CVText.appendChild(CVBr)
            CVText.appendChild(CVPost)
            CVText.appendChild(CVXP)
            // CVText.appendChild(CVAge)

            // CVWrapper.appendChild(CVCertificatesWrapper)

            
            // add adding certificates
            for (certificate of cv[5]){
                const certificateElement = document.createElement("img")
                certificateElement.src = certificate
                CVCertificatesWrapper.appendChild(certificateElement)
            }
        } 
    }
}

// back from one CV to all CVS
const toTeamButton = document.getElementById("toTeamButton")

toTeamButton.onclick = function() {
    teamCV.style.display = "none"
    team.style.display = "flex"
}

// feedbacks creating from list
const feedbacksWrapper = document.getElementById("feedbacksWrapper")

const feedbacksList = [
    ["KIA", "Нравится пунктуальность, оперативность, компетентные и опытные сотрудники в сфере бухгалтерского учета, налогооблажения и кадрового учета, своевременная сдача отчетов, хорошее взаимопонимание с конрагентами."],
    ["ASM Complex", "Arkad Audit является нашим партнером c 2022 года. Для нас, как для молодой компании с иностранными учредителями, крайне важно соблюсти все требования законодательства Республики Узбекистан. Мы рады, что обратились к данной компании за услугами бухгалтерского сопровождения. Хотим поблагодарить команду Arkad Audit во главе с Туралиновой Натальей Александровной за высокий профессионализм, своевременную и квалифицированную помощь в ведении бухгалтерского учета, а также за компетентные консультации в вопросах налогового законодательства Республики Узбекистан. Особенно хотим отметить ценные советы в отношении экспортных и импортных операций, внимательное отношение к поставленным задачам, обязательность и богатый опыт получили самую высокую оценку ООО «ASM-Complex». Благодаря индивидуальному подходу и вниманию к деталям Arkad Audit создал стабильные, комфортные и дружеские отношения с нашей компанией. Сотрудники оперативно, грамотно и добросовестно справляются со своими обязанностями, постоянно повышают свою квалификацию, осуществляют многоступенчатый контроль за подготовкой бухгалтерской отчетности и основных бухгалтерских операций. Надеемся на дальнейшее успешное сотрудничество и будем рады рекомендовать эту компанию своим партнерам"],
    ["Urban Media", "Наша компания Urban Media Alliance работает с Arkad Audit на протяжение уже несколько лет. За всё время сотрудничества не замечалось проблем с работой со специалистами. Помимо этого нас нравится:\nКачество и профессиональный подход к работе — сотрудники оперативно решают вопросы, быстро реагируют на изменения в законодательстве и помогают избежать ошибок. Комплексный подход к решению задач — специалисты помогают разобраться в различных вопросах, которые появляются в процессе деятельности, например, в ведении кадрового учёта или разъяснениях изменяющегося налогового законодательства. Оперативность и клиентоориентированость. Работа с Arkad Audit экономит время и нервы. Мы также надеемся на дальнейшее плодотворное и взаимовыгодное сотрудничество!"],
    ["Abu Garant East", "Мы рекомендуем сотрудничество с компанией полного цикла по бухгалтерскому сопровождению Arkad Audit. Наша компания ценит профессиональные качества команды и ее руководителя Наталью Александровну. За время сотрудничества, более трёх лет, бухгалтера компании успешно контактировали по возникающим вопросам с налоговыми органами республики Узбекистан, а так же с банками и контрагентами компании."],
    ["DOM29", "Компания Arkad Audit ведёт бухгалтерский учет нашего бизнеса, и мы крайне довольны качеством их услуг. Все финансовые операции ведутся точно и в срок, без ошибок и недоразумений. Команда профессионалов быстро решает возникающие вопросы и предоставляет полезные рекомендации для оптимизации налоговой нагрузки и управления финансами.\nОсобо хочется отметить:\nГрамотное ведение отчетности и документооборота. Высокий уровень ответственности и внимание к деталям. Постоянную поддержку и разъяснение сложных бухгалтерских и налоговых моментов. С Arkad Audit можно быть уверенным, что бухгалтерский учет вашего бизнеса находится в надежных руках. Спасибо за профессионализм и ответственный подход"],
    ["TOKU Restaurant", "Мы работаем с компанией Arkad Auidt по ведению бухгалтерского учета, и с уверенностью можем сказать, что это один из лучших партнеров, с которыми нам приходилось сотрудничать. Все процессы автоматизированы и четко налажены, благодаря чему мы избавлены от лишних хлопот с документацией и отчетностью.\nОсобенно приятно:\nВсегда оперативная обратная связь — вопросы решаются быстро, даже в нестандартных ситуациях. Гибкость и индивидуальный подход к нашему бизнесу — специалисты предлагают решения, которые действительно работают для нашей отрасли. Регулярные консультации по изменениям в законодательстве, что помогает нам своевременно адаптироваться и избегать проблем с налоговыми органами. Благодаря Arkad Audit мы можем сосредоточиться на развитии бизнеса, не беспокоясь о бухгалтерии. Рекомендую эту компанию всем, кто ищет надежного и профессионального партнера для ведения финансовых дел"]
]

function feedbacksLoading() {
    //delete previous elements
    feedbacksWrapper.innerHTML=""
    for (const feedbacksInfo of feedbacksList) {
        // create elements
        const feedbacksElement = document.createElement("div")
        const feedbacksHeading = document.createElement("h2")
        const feedbacksText = document.createElement("p")

        // add class
        feedbacksElement.classList.add("feedbacksElement")

        // add content
        feedbacksHeading.textContent = feedbacksInfo[0]
        feedbacksText.textContent = feedbacksInfo[1]
    
        // append to the document
        feedbacksWrapper.appendChild(feedbacksElement)
        feedbacksElement.appendChild(feedbacksHeading)
        feedbacksElement.appendChild(feedbacksText)
    }
}



// mini-functions

// function that counts age
function countAge(birthDate) {
    const currentYear = new Date().getFullYear()
    return currentYear - birthDate
}

