const video = document.querySelector("main section.second :first-child video");
const playBtn = document.querySelector("main section.second :first-child span");

playBtn.addEventListener("click", () => {
    video.setAttribute("controls", "controls");
    video.play();
    playBtn.style.display = "none";
});

const element = document.querySelector(".none");
const hover = document.querySelector(".header ul li:nth-child(3)");
let timeout = 0;

hover.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    element.style.display = "block";
});

hover.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
        element.style.display = "none";
    }, 200);
});

element.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
});

element.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
        element.style.display = "none";
    }, 200);
});



let data = [

    {
        p: "وره آموزشی پایتون و طراحی وب با HTML,CSS رو در ذهن پویا گذروندم . بعد از اتمام دوره توتستم برنامه خودم رو در مایکت منتشر کنم",
        image: "./avatar/امیر-حسین-خزائی.png",
        h3: "امیر حسین خزايی",
        h4: "دانشجو رشته نرم افزار"
    },
    {
        p: "استاد برنامه نویسی پایتون ، سرفصل های سخت رو ساده و قابل فهم آموزش میدادند، که درکش راحت تر و قابل فهم شد",
        image: "./avatar/185200197145569475.jpg",
        h3: "ایلیا نیکخواه",
        h4: "دانشجو رشته بیوفیزیک - مهارت آموز پایتون"
    },

    {
        p: "بعد از اتمام دوره مقدماتی پیشرفته پایتون، فهمیدم مفاهیم برنامه نویسی و الگوریتم نویسی خیلی برام راحت تر شده.",
        image: "./avatar/5877531237428609685-e1730731365305-1.jpg",
        h3: "محمد مهدی سعیدیان",
        h4: "دانشجو"
    },

];


const btnRight = document.querySelector("main section.fifth> :nth-child(2)>span:nth-child(3)");
const btnLeft = document.querySelector("main section.fifth> :nth-child(2)>span:nth-child(4)");
const div = document.querySelector("main section.fifth> :nth-child(2) div");
const marker = document.querySelectorAll("main section.fifth> :nth-child(2) ul li");
let index = 0;

function active(i) {
    marker.forEach((li) => {
        li.classList.remove("active");
        marker[marker.length - 1 - i].classList.add("active");
    });
}


function box(i) {
    div.innerHTML =
        `
                <div>
                    <p> ${data[i].p} </p>
                    <img src=${data[i].image} alt="image user">
                    <h3>${data[i].h3}</h3>
                    <h4>${data[i].h4}</h4>
                </div>
        `;
    active(i);
};

btnRight.addEventListener("click", () => {
    index++;

    if (index >= data.length) {
        index = 0;
    }

    box(index);
});

btnLeft.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = data.length - 1;
    }
    box(index);
});

box(index);

marker.forEach((li, i) => {
    li.addEventListener("click", () => {
        index = marker.length - 1 - i;
        box(index);
    });
});

setInterval(() => {
    index++;

    if (index >= marker.length) {
        index = 0;
    }
    box(index);
} ,5000)


const data1 = [
    {
        image: "./avatar/photo_5947248877449100441_y-1.jpg",
        h3: "مجتبی باری",
        h4: "مدرس دوره تدوین و گرافیک",
        p: "کارشناسی کارگردانی و فیلم برداری تدوینگر و فیلنامه نویس <br کارگردانی فیلم های جشواره فارسی - برگزار کننده دوره های آموزشی تدوین و فیلم برداری"
    },

    {
        image: "./avatar/photo_1581827440436684945_c-1.jpg",
        h3: "محمد رضا فاتحی",
        h4: "مدرس دوره های برنامه نویسی",
        p: "کاردانی کامپیوتر نرم افزار دانشگاه سجاد برنامه نویس پایتون متخصص devopd - برنامه نویسی پیشرفته بک اند - لینوکس"
    },

    {
        image: "./avatar/2605806562164451536-e1730813489104-1.jpg",
        h3: "نغمه ندائی",
        h4: "مدرس دوره های طراحی سایت و آنالیز دیتا",
        p: "کارشناسی مهندسی کامپیوتر ، گرایش نرم افزار فارغ و التحصیل ار دانشگاه فردوسی با معدل 18.22 طراحی سایت های وردپرسی آژانس دیجیتال مارکتینگ میانبر - تحصص اصلی در powerBi",
    },

    {
        image: "./avatar/photo16341413419.jpg",
        h3: "زهرا ضفدری",
        h4: "مدرس دوره های برنامه نویسی و سئو",
        p: "کارشناس رشته علم اطلاعات دانشگاه فردوسی مشهد موسس ذهن پویا مدرس دوره های آموزشی برنامه نویسی پایتون - کارشتاس دیجیتال مارکتینگ و سئو - وب اسکیپر"
    }
]



const btn_right = document.querySelector("main section.fifth> :nth-child(1)> :nth-child(3)");
const btn_left = document.querySelector("main section.fifth> :nth-child(1)> :nth-child(4)");
const div1 = document.querySelector("main section.fifth> :nth-child(1) div");
const marker1 = document.querySelectorAll("main section.fifth> :nth-child(1) ul li");
let index1 = 0;

function active1(i){
    marker1.forEach((li) => {
        li.classList.remove("active");
        marker1[marker1.length -1 -i].classList.add("active");
    });
}

function box1(i) {
    div1.innerHTML =
        `
        <div>
                <img src="${data1[i].image}" alt="image">
                <h3>${data1[i].h3}</h3>
                <h4>${data1[i].h4}</h4>
                <p>${data1[i].p}</p>
        </div>
    `;
    active1(i)
};


btn_right.addEventListener("click", () =>{
    index1++;

    if(index1 >= data1.length){
        index1 = 0;
    };

    box1(index1);
});


btn_left.addEventListener("click", () => {
    index1--;

    if (index1 < 0){
        index1 = data1.length -1;
    };
    box1(index1)
});

box1(index1);

marker1.forEach((li , i) => {
    li.addEventListener("click", () =>{
        index1 = marker1.length -1 -i;
        box1(index1);
    });
});

setInterval(() => {
    index1++;

    if (index1 >= marker1.length) {
        index1 = 0;
    }
    box1(index1);
} ,5000);









let counter1 = document.querySelector(".content1");
let target1 = 450;
let current = 0;
// let started = false;

// window.addEventListener("scroll", () => {
//     let counterTop = counter1.offsetTop;
//     let scrollBottom = window.scrollY + window.innerHeight;

//     if (scrollBottom > counterTop && !started){
//         started = true;
//         let interval = setInterval(() => {
//             current++;

//             current.innerText = current;

//             if (current === target1) {
//                 clearInterval(interval);
//             }
//         }, 5);
//     }
// });


function start (counter1) {
    const target = +counter1.dataset.target;
    let current = 0;
    console.log(target, typeof target);

    const interval = setInterval(() => {
        current += Math.ceil(target / 100);

        if (current >= target) {
            current = target;
            clearInterval();
        }
        counter1.innreText = current;
    }, 20)
}

let started = false;
window.addEventListener("scroll", (e) => {

    // console.log("scorolling ...");
    
    const counter1 = document.querySelector(".content1");
    const rect = counter1.getBoundingClientRect();
    // console.log("top:" , rect.top, "window:", window.innerHeight);
    

    const elementY = rect.top;
    const windowHeight = window.innerHeight;

    if (elementY < windowHeight && !started){
        started = true;
        start(counter1);
    }
    
})


// let counter2 = document.querySelector(".82");
// let counter3 = document.querySelector(".15");
// let counter4 = document.querySelector(".1034");

