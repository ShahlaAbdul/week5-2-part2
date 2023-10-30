// ?----------------reduce------------------------------

// const myarr=[1,2,5];
// const result=myarr.reduce((ilk,sonraki) =>ilk+sonraki,0)
// console.log(result);
// console.log(myarr.every(x=>x===1))

// ?----------------without function-------------------------

// const arr=[2,3,3]
// let sum=0;
// for (i=0;i<arr.length;i++) {
//     sum=sum+arr[i];

// }
// console.log(sum)
// ?------------------object---------------------------

// const shehla={
//     name:"shehla",
//     age:19,
//     ismarried:false,
//     class:"azm201",
//     friends:[{               //object daxilinde object (arrays)
//         name:"Gunel",
//         age:19,
//         ismarried:false,
//         class:"azm201",
//     },
//     {
//         name:"Ulker",
//         age:19,
//         ismarried:false,
//         class:"azm201",
//     },
//     {
//         name:"Efsane",
//         age:19,
//         ismarried:false,
//         class:"azm201",
//     }

//     ]
// }
// const property= prompt("ozellik daxil edin(name,age,ismarried)")
// console.log(shehla.name);
// console.log(shehla[property]);
// console.log(shehla.friends[0].age)

// const arr = [
//     {
//         "id": 2,
//         "description": "Sweet and savory sauces relishes spreads and seasonings",
//         "name": "Condiments"
//     },
//     {
//         "id": 1,
//         "description": "Soft drinks coffees teas beers and ales",
//         "name": "Beverages"
//     },
//     {
//         "id": 3,
//         "description": "Desserts candies and sweet breads",
//         "name": "Confections"
//     },
//     {
//         "id": 4,
//         "description": "Cheeses",
//         "name": "Dairy Products"
//     },
//     {
//         "id": 5,
//         "description": "Breads crackers pasta and cereal",
//         "name": "Grains/Cereals"
//     },
//     {
//         "id": 6,
//         "description": "Prepared meats",
//         "name": "Meat/Poultry"
//     },
//     {
//         "id": 7,
//         "description": "Dried fruit and bean curd",
//         "name": "Produce"
//     },
//     {
//         "id": 8,
//         "description": "Seaweed and fish",
//         "name": "Seafood"
//     }
// ]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id>3) {
//         console.log(arr[i])

        
//     }
//     if (arr[i].name=="Seafood") {
//         console.log(arr[i]);
        
//     }
// }
// ?--------------------------------------------includes method()---------------------

// arr.forEach(x =>{
//     if (x.description.includes("Dried fruit")) {
//         console.log(x)
//     }
// } )

// ?------------------------filter method()------------------------------
// const newarr=arr.filter(x=>x.name.toLowerCase().includes("f".toLowerCase))
// console.log(newarr);


// arr.sort((a,b)=>a-b)
// console.log(arr.id)

// -------------------------sort method---------------------------

// arr.sort((a,b) =>(a.id>b.id)? 1: ((b.id>a.id) ? -1:0))
// console.log("ide gore")
// console.table(arr);
// arr.sort((a,b)=> (a.name>b.name)? 1: ((b.name>a.name)? -1:0))
// console.table(arr)
// arr.sort((a,b)=> (a.description>b.description) ? 1: (b.description>a.description)? -1: 0)
// console.table(arr)



// ? practise-part

// ?--------------task1------------------

// let mynewstring="SHehLA"
// function mystring(string) {
    
//     if (string.toUpperCase()==string || string.toLowerCase()==string) {
        
//         return true
//     }
//     else{
//         return false
//     }
    
// }
// console.log(mystring(mynewstring))
// for (let i = 0; i <string.length; i++) {
//     arr=string.push(arr[i]) 
// }
// for (let i = 0; i < arr.length; i++) {
//      if (string[i].toUpperCase()==arr[i]) {
// }

// }
// console.log[arr]


// const newarr=arr.filter(x=>x.name.toLowercase().includes("shehla".toLowercase()))
// console.log(newarr)


// const myfunctyion(arr)

// ?------------------------------task2---------------------------


// const array=["shehlaaaaaaaaa", "zumrud", "mehemmed", "arif","fuad"]
// const newarr=array.filter(x=>x.length>6)
// console.log(newarr)

//? -------------------------------task3----------------------------
// const checkFile=(filename)=>{
//     const result = filename.slice(filename.indexOf("."))
//     return result;
// }
// console.log(checkFile("index.html"))

// ?----------------------------task4------------------------------

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]


// for (let i = 0; i < users.length; i++) {
//     if (users[i].id>5) {
//     }
//     console.log(users[i].address)
    
// }
// users.forEach((x)=> x.id%2!==0  && x.website.includes(".com")? console.log(x) :null)


    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].id%2===0) {
    //      console.log(users[i].company)   
    //     }
        
    // }




