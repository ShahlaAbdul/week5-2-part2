// ?----------------------------task1--------------------------

// let monthly_sale = 1000;    // umumi maas
// let month_1 = Math.floor(monthly_sale / 3); //Math.floor vasitesile ededi 3e bolub qaliqsiz hali tapiriq
// let month1 = month_1;
// let month2 = month_1;  //bir ve ikinci aylar bu bu meblege beraber olur,
// let month3 = monthly_sale - (month1 + month2) //3cu ay ise umumi maasla iki ayin maasinin ferqine beraber olur

// console.log(month1, month2, month3);




 const money = parseInt(prompt("pulu daxil edin"))
 const months = parseInt(prompt("aylari daxil edin"))
function monthly_sale(months, money) {
    const pay = []
    let payFor1Month = Math.floor(money / months)
    let lastmonth=money-(payFor1Month*months)
    for (let i = 1; i <= months; i++) {
        pay.push(payFor1Month)
        if (i === months) {
               pay.push(payFor1Month + lastmonth)
        }
    }
     for (let i = 0; i <= pay.length; i++) {
            console.log(pay[i])
        }
}

    monthly_sale(months,money)

   
        

