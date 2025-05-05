// Data storage for dynamic content - News and Events
const schoolData = {
    news: [
        {
            id: 1,
            title: "Ljetni odmor datumi objavljeni",
            date: "2025-05-05",
            summary: "Uprava škole je objavila datume ljetnog odmora za 2025. godinu. Odmor će početi 20. juna, a nastava će se nastaviti 25. augusta.",
            content: "Uprava škole je objavila datume ljetnog odmora za 2025. godinu. Odmor će početi 20. juna, a nastava će se nastaviti 25. augusta. Učenici i roditelji mogu planirati ljetne aktivnosti u skladu s tim. Također podsjećamo da su svi udžbenici za narednu školsku godinu već dostupni u knjižari škole.",
            image: "images/skola-1.webp",
            featured: true,
            author: "Uprava škole"
        },
        {
            id: 2,
            title: "Nova laboratorijska oprema stigla",
            date: "2025-04-28",
            summary: "Naše odjeljenje za nauku s ponosom najavljuje dolazak nove laboratorijske opreme.",
            content: "Naše odjeljenje za nauku s ponosom najavljuje dolazak nove laboratorijske opreme koje će unaprijediti nastavu fizike, hemije i biologije. Nova oprema uključuje digitalne mikroskope, setove za eksperimente iz elektriciteta i kompletan set za analizu vode i tla.",
            image: "images/lab-equipment.jpg",
            featured: false,
            author: "Nastavnik fizike"
        },
        {
            id: 3,
            title: "Škola postigla nagradu za izvrsnost",
            date: "2025-04-15",
            summary: "S ponosom objavljujemo da je Deveta osnovna škola dobila nagradu za obrazovnu izvrsnost",
            content: "S ponosom objavljujemo da je Deveta osnovna škola dobila nagradu za obrazovnu izvrsnost od strane Ministarstva obrazovanja. Nagrada je rezultat kontinuiranog rada naših nastavnika i učenika na postizanju izvrsnih rezultata i uvođenju inovativnih metoda podučavanja.",
            image: "images/award.jpg",
            featured: false,
            author: "Direktor škole"
        }
    ],
    events: [
        {
            id: 1,
            title: "Godišnji sportski dan",
            date: "2025-05-15",
            time: "9:00 - 16:00",
            summary: "Naš godišnji sportski dan će uključivati atletska takmičenja, takmičenja u timskim sportovima...",
            description: "Naš godišnji sportski dan će uključivati atletska takmičenja, takmičenja u timskim sportovima i različite zabavne aktivnosti za učenike svih uzrasta. Roditelji su dobrodošli da prisustvuju i navijaju za svoju djecu.",
            location: "Školsko igralište",
            featured: true
        },
        {
            id: 2,
            title: "Sastanak roditelja i nastavnika",
            date: "2025-05-20",
            time: "15:00 - 19:00",
            summary: "Prilika za roditelje da se sastanu s nastavnicima i razgovaraju o akademskom napretku...",
            description: "Prilika za roditelje da se sastanu s nastavnicima i razgovaraju o akademskom napretku njihove djece. Nastavnici će biti dostupni u svojim učionicama prema rasporedu koji će biti objavljen na web stranici škole.",
            location: "Školske učionice",
            featured: true
        },
        {
            id: 3,
            title: "Dan otvorenih vrata",
            date: "2025-06-05",
            time: "10:00 - 14:00",
            summary: "Pozivamo buduće učenike i njihove roditelje da posjete našu školu i upoznaju se s nastavnim programima.",
            description: "Pozivamo buduće učenike i njihove roditelje da posjete našu školu i upoznaju se s nastavnim programima, nastavnicima i prostorijama škole. Bit će organizirano predstavljanje škole, razgledavanje i informativni razgovori.",
            location: "Glavni hol škole",
            featured: false
        }
    ]
};