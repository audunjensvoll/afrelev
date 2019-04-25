// Her er alle rom definert
var romnr = 0;  // utgangspunkt
var viewnr = 1;
var areanr = 0;
var rom = [
    {   
        //Rom 1
        view: [
            {
                img: "./bilder/EFRoom0Venstre0.jpg",
                areas: [{
                    coords: "362,80,544,77,549,162,499,164,497,197,449,200,440,169,368,17",
                    type: "bilde",
                    img: "./bilder/EFRoom0VenstreSiffer.jpg",
                    message: "Dette er sifferet"
                }]
            },
            {
                img: "./bilder/EFDoor0Last.jpg",
                areas: [{
                    coords: "296,1,630,0,623,576,315,575",
                    kode: 1,
                    type: "dør",
                    laast: true,
                    apendoor: "./bilder/EFDoor0Apen.jpg",
                    nesterom: 1,
                    message: "Dette er døren"
                },
                {
                    coords: "650,144,671,144,671,162,651,163",
                    type: "lys"
                },
]
            },
            {
                img: "./bilder/EFRoom0Hoyre.jpg",
                areas: [{
                    coords: "254,143,375,144,374,205,251,205",
                    type: "bilde",
                    img: "./bilder/EFRoom0HoyreBoks3.jpg",
                    message: "Dette er diagrammet"
                },
                {
                    coords: "535,304,527,344,613,347,615,313",
                    type: "bilde",
                    img: "./bilder/EFRoom0HoyreBoks1.jpg"    
                },
                {
                    coords: "127,157,147,158,156,206,129,212",
                    type: "bilde",
                    img: "./bilder/EFRoom0HoyreFigur.jpg"     
                },
                {
                    coords: "305,490,303,509,277,509,278,488",
                    type: "bilde",
                    img: "./provebilder/provebilder_ferdig/Closeup0Tabell_ferdig.jpg"
                }]
            }
        ],
        startview: 1
    },
    {   
        //Rom 2
        view: [
            {
                img: "./bilder/EFRoom1Venstre.jpg",
                areas: [{
                    coords: "707,416,686,421,686,463,703,474",
                    type: "bilde",
                    img: "./bilder/EFRoom1VenstreCloseup1.jpg",
                    message: "Dette er esken"
                }]
            },
            {
                img: "./bilder/EFRoom1.jpg",
                areas: [{
                    coords: "391,81,538,85,541,369,399,371",
                    kode: 1,
                    type: "dør",
                    laast: true,
                    apendoor: "./bilder/EFRoom1DoorApen.jpg", 
                    nesterom: 3,
                    message: "Dette er døren"

                },
                {
                    coords: "655,69,679,60,675,327,647,329",
                    type: "låstdør",
                    laast: true,
                    nesterom: 2,
                    message: "røret"
                }],
                sistrom: 0
            },

            {
                img: "./bilder/EFRoom1Hoyre1.jpg",
                areas: [{
                    coords: "931,222,927,249,950,259,1020,261,1020,227",
                    type: "bildenøkkel",
                    img: "./bilder/EFRoom1HoyreNokkelboksApen.jpg",
                    message: "Nøkkelboks"
                },
                {
                    coords: "571,314,577,314,581,325,583,358,567,359,567,334,565,325",
                    type: "bilde",
                    img: "./bilder/EFRoom1hoyreFlaske.jpg"
                },
                {
                    coords: "198,209,187,254,204,254,207,260,263,260,271,254,271,225,267,212,255,203",
                    type: "bilde",
                    img: "./bilder/EFRoom1HoyreBag.jpg"
                },
                {
                    coords: "563,381,565,427,596,443,642,441,615,411,677,405,679,395,700,394,650,375",
                    type: "bilde",
                    img: "./bilder/EFRoom1HoyreBoks.jpg"
                }]
            }
        ],
        startview: 1
    },
    {
        //Rom 3
        view: [
            {
                img: "./bilder/EFRoom1Rom2.jpg",
                areas: [{
                    coords: "402,352,497,364,495,410,397,395",
                    type: "bilde",
                    img:"./provebilder/CloseupLikninger1.jpg"
                }],
                sistrom: 1
            }
        ],
        startview: 0
    },
    {   
        //Rom 4
        view: [
            {
                img: "./bilder/EFRoomKorridor.jpg",
                areas: [{
                    coords: "433,127,583,129,583,391,441,392",
                    kode: 1,
                    type: "dør",
                    laast: true,
                    tilbakeview: 0,
                    nesterom: 5
                }],
                sistrom: 1
            },
            {
                img: "./bilder/EFRoom2.jpg",
                areas: [{
                    coords: "1028,411,925,410,732,321,948,321,1027,346",
                    type: "bilde",
                    img: "./bilder/EFRoom2Biljardbord.jpg"
                },
                {
                    coords:"190,423,128,450,101,429,80,431,59,442,57,333,65,321,115,334",
                    type: "bilde",
                    img: "./bilder/EFRoom2Dartspill.jpg"

                }, 
                {
                    coords:"724,537,641,546,615,506,702,507",
                    type: "bilde",
                    img: "./bilder/EFRoom2Closeup1.jpg"

                }]
            },
            {
                img: "./bilder/EFRoom2DoorLast.jpg",
                areas: [{
                    coords: "712,1,322,2,341,577,702,575",
                    kode: 1,
                    type: "dør",
                    laast: true,
                    apendoor: "./bilder/EFRoom2DoorApen.jpg", 
                    nesterom: 4,
                    message: "Dette er døren"
                }]
            }
        ],
        startview: 0
    },
    {   
        //Rom 5
        view: [
            {
                img: "./bilder/EFRoom3Closeup1.jpg",
                areas: [{
                    coords: "2,125,23,136,35,156,43,193,43,221,75,213,82,218,37,229",
                    type: "bilde",
                    img: "./bilder/EFRoom3Figur1.jpg"
                    
                },
                {
                    coords: "184,421,207,426,231,368,209,342,227,221,222,214,195,333,187,326,181,332,191,348,186,404",
                    type:"bilde",
                    img:"./bilder/EFRoom3Figur2.jpg"
                }],
                sistrom: 3,
                tilbakeview: 2
            }
        ],
        startview: 0
    }
];
//Holder på informasjon om 
var hint = [{
    tekst: "Hint 1",
    tid: 150000
}, {
    tekst: "Bak en låst dør venter neste gåte, finn nøkkelen for å opprettholde håpet 4min", 
    tid: 300000
}, {
    tekst: "Positivt eller negativt, hvilken side? Tenk deg om når ditt svar begynner å stride", 
    tid: 900000
}, {
    tekst: "Om du løser oppgaven og kommer ingen vei, vil den blå skriften hjelpe deg", 
    tid: 1200000
}, {
    tekst: "Den hvite kulen, umarkert og fri. Denne kulen har et siffer uten verdi", 
    tid: 1500000
}, {
    tekst: "Tykkelse og posisjonering, en viktig peker. Kombiner det med kuleparene, og gjør slutt på Ola's onde leker 18min", 
    tid: 1800000
}, {
    tekst: "På din reise gjennom Helvete har du sett mange venner, husk de alle og de vil hjelpe deg til å bli fri 26min", 
    tid: 2100000
}];