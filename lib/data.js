    export const bigButtonsFemale = [
        {name:"Жаңа", path: "new"},
        {name:"Кеш сериясы", path:"series"},
        {name:"БСК жасөспірім", path:"bsk"},
        {name:"Шаш әсері", path:"hair-effect"}
    ]

    // const bigButtonsMale = [
    //     {name:"Жаңа", path:""},
    //     {name:"Collaborations", },
    //     {name:"Жақсы сатушылар"},
    //     {name:"Комбо ұсынысы"}
    // ]

    export const categories = [
        {name: "Luxury active", path:"active"},
        {name: "Күртеше және тренч", path:"trench"},
        {name: "Пальто және тренч", path: "coats"},
        {name: "Джинс", path:"jeans"},
        {name: "Шалбар", path:"trousers"},
        {name: "Көйлек және түрлі комбинезон", path:"shirts"},
        {name: "Жемпір және кардиган", path:"pullovers"},
        {name: "Свитшот", path:"sweatshots"},
        {name: "Топ және боди", path:"tops"},
        {name: "Футболка", path:"t-shirts"},
        {name: "Жейде және блузка", path:"shirts-b"},
        {name: "Белдемше", path:"pairs"},
        {name: "Шорт пен бермуд", path:"shorts"},
        {name: "Жалпы киім үлгісі", path:"allovers"},
        {name: "Жүзуге арналған киім", path:"swimsuits"},
        {name: "Әйелдер ішкі киімі", path:"underwaer"},
        {name: "Аяқ киім", path:"boots"},
        {name: "Сөмке мен тиын қапшық", path:"bags"},
        {name: "Аксессуарлар", path:"accessories"},
    ]

    export const picks = [
        {name: "Жүзуге арналған киім", path:"swimsuits"},
        {name: "Әйелдер ішкі киімі", path:"underwear"},
        {name: "Аяқ киім", path:"boots"},
        {name: "Сөмке мен тиын қапшық", path:"bags"},
        {name: "Аксессуарлар", path:"accessories"},
    ]

    export const tags = [ {name: "Сыйлық картасы", path:"gift-card"},
        {name: "Ақпараттық бюллетень", path:"info"},
        {name: "MBRS", path:"mbrs"},
        {name: "Көмек", path:"help"},
    ]

    export function getName(path){
        const allLists = [...tags, ...picks, ...bigButtonsFemale, ...categories  ];

        let pathname = ""

        allLists.forEach(x=>{
            if(x.path === path){
                pathname = x.name
            }
        })

        return pathname

    }


    //// тут товары

    export const productsList = [
    { id:"asdasd", price: 38.5, discount:0.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]", "bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]"], title: "Көйлек" },
    { id:"asdwdawffasd", price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]"], title: "Шалбар" },
    { id:"asd223423", price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]"], title: "Аяө-киім" },
    { id:"asdasd556456", price: 38.5, discount: 0.4, imgs: ["bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]"], title: "Жемпір" },
    { id:"sdfsdf-sdfsdf-6546456", price: 38.5, discount:0.2, imgs: ["bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]"], title: "Көйлек 2" },
    { id:"dsfsdf-6dsfsdf", price: 38.5, discount: 0.1, imgs: ["bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]"], title: "Шалбар 2" },
    { id:"sdfsdfhgh-y666", price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]"], title: "Аяө-киім 2" },
    { id:"sdfsdfsdf-kghjghj", price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]"], title: "Жемпір 2" },
    { id:"uyuyuuy-dfgdfg", price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]"], title: "Көйлек 2" },
    { id:"dfgdfgdfg", price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]"], title: "Шалбар 2" },
    { id:"dfgdfg", price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]"], title: "Аяө-киім 2" },
    { id:"ww3r3t-44848", price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]"], title: "Жемпір 2" }
  
  ]