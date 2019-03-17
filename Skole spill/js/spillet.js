// Her er alle rom definert
var romnr = 0;  // utgangspunkt
var viewnr = 1;
var areanr = 0;
var rom = [
    {   
        //Rom 1
        view: [
            {
                img: "./provebilder/provebilder_ferdig/Left0_ferdig.jpg",
                areas: [{
                    coords: "442,247,443,234,483,234,479,174,414,174,349,174,351,233,408,233,409,246",
                    type: "bilde",
                    img: "./provebilder/provebilder_ferdig/CloseupTaskLeft0_ferdig.jpg",
                    message: "Dette er sifferet"
                }]
            },
            {
                img: "./provebilder/Door0.JPG",
                areas: [{
                    coords: "370,577,671,575,662,14,367,24",
                    kode: 3574,
                    type: "dør",
                    laast: true,
                    nesterom: 1,
                    message: "Dette er døren"
                }]
            },
            {
                img: "./provebilder/provebilder_ferdig/Right0_ferdig.jpg",
                areas: [{
                    coords: "380,389,381,401,404,403,404,389",
                    type: "bilde",
                    img: "./provebilder/provebilder_ferdig/Closeup0Tabell_ferdig.jpg",
                    message: "Dette er diagrammet"
                }]
            }
        ],
        startview: 1
    },
    {   
        //Rom 2
        view: [
            {
                img: "./provebilder/provebilder_ferdig/Left1_ferdig.JPG",
                areas: [{
                    coords: "570,314,570,335,583,343,600,339,671,307,668,286,657,279",
                    type: "bilde",
                    img: "./provebilder/provebilder_ferdig/CloseupClueLeft1_ferdig.JPG",
                    message: "Dette er esken"
                }]
            },
            {
                img: "./provebilder/provebilder_ferdig/Door1_ferdig.JPG",
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
                img: "./provebilder/provebilder_ferdig/Right1_ferdig.JPG",
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
                img: "./provebilder/provebilder_ferdig/Left0_ferdig.JPG",
                areas: [{
                }]
            },
            {
                img: "./provebilder/provebilder_ferdig/Door0_ferdig.JPG",
                areas: [{
                    coords: "475,117,602,119,601,376,475,374",
                    kode: 5067,
                    type: "dør",
                    laast: true,
                    nesterom: 3,
                    message: "Dette er døren"

                }],
                sistrom: 1
            },

            {
                img: "./provebilder/provebilder_ferdig/Right0_ferdig.JPG",
                areas: [{

                }]
            }
        ],
        startview: 1
    }
];
//Holder på informasjon om <
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