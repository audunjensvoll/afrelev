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
                    kode: 3574,
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
                    coords: "570,314,570,335,583,343,600,339,671,307,668,286,657,279",
                    type: "bilde",
                    img: "./provebilder/provebilder_ferdig/CloseupClueLeft1_ferdig.JPG",
                    message: "Dette er esken"
                }]
            },
            {
                img: "./bilder/EFRoom1.jpg",
                areas: [{
                    coords: "475,117,602,119,601,376,475,374",
                    kode: 2507,
                    type: "dør",
                    laast: true,
                    nesterom: 2,
                    message: "Dette er døren"

                },
                {
                    coords: "799,577,847,578,843,97,910,3,795,3",
                    type: "bilde",
                    img: "./provebilder/Left1.JPG",
                    message: "Dette er røret"
                }],
                sistrom: 0
            },

            {
                img: "./bilder/EFRoom1Hoyre1.jpg",
                areas: [{
                    coords: "80,310,133,314,164,271,159,220,106,211,64,244",
                    type: 1,
                    message: "Dette er esken"
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
                img: "./bilder/EFRoom3.jpg",
                areas: [{
                }]
            },
            {
                img: "./bilder/EFRoomKorridor.jpg",
                areas: [{
                    coords: "475,117,602,119,601,376,475,374",
                    kode: 5067,
                    type: "dør",
                    laast: true,
                    nesterom: 4,
                    message: "Dette er døren"

                }],
                sistrom: 2
            },

            {
                img: "./bilder/provebilder_ferdig/Right0_ferdig.JPG",
                areas: [{

                }]
            }
        ],
        startview: 1
    }
];
//Holder på informasjon om hint
var hint = [{
    tekst: "Hint 1",
    tid: 5000
}, {
    tekst: "Hint 2",
    tid: 10000
}, {
    tekst: "Hint 3",
    tid: 15000
}, {
    tekst: "Hint 4",
    tid: 20000
}, {
    tekst: "Hint 5",
    tid: 100000
}];