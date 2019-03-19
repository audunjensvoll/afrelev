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
                    nesterom: 2,
                    message: "Dette er døren"

                },
                {
                    coords: "647,227,641,238,649,240,655,231",
                    type: "bilde",
                    img: "./bilder/EFRoom1Rom2.jpg",
                    message: "Dette er røret"
                }],
                sistrom: 0
            },

            {
                img: "./bilder/EFRoom1Hoyre1.jpg",
                areas: [{
                    coords: "931,222,927,249,950,259,1020,261,1020,227",
                    type: "bilde",
                    img: "./bilder/EFRoom1HoyreNokkelboks.jpg",
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
                    kode: 5067,
                    type: "dør",
                    laast: true,
                    nesterom: 3,
                    message: "Dette er døren"

                }],
                sistrom: 1
            },

            {
                img: "./bilder/provebilder_ferdig/Right0_ferdig.JPG",
                areas: [{

                }]
            }
        ],
        startview: 0
    },
    {   
        //Rom 4
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
                }]
            },
            {
                img: "./bilder/EFRoomKorridor.jpg",
                areas: [{
                    coords: "433,127,583,129,583,391,441,392",
                    kode: 1,
                    type: "dør",
                    laast: true,
                    nesterom: 4,
                    message: "Dette er døren"

                },
                {
                    coords: "433,127,583,129,583,391,441,392",
                    type: "rom"
                }],
                sistrom: 2
            }
        ],
        startview: 1
    }
];
//Holder på informasjon om hint
var hint = [{
    tekst: "Hint 1",
    tid: 120000
}, {
    tekst: "Hint 2",
    tid: 240000
}, {
    tekst: "Hint 3",
    tid: 360000
}, {
    tekst: "Hint 4",
    tid: 480000
}, {
    tekst: "Hint 5",
    tid: 600000
}];