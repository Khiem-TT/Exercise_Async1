let buyCar = (car, money) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 999999) {
                resolve(`đủ mua ${car}`);
            } else {
                reject(`không đủ mua ${car}`);
            }
        }, 2000);
    })
}

let money1 = 1500000;
buyCar('BWM', money1)
    .then((result) => {
        console.log(money1 + '$ ' + result);
    })
    .catch((result) => {
        console.log(money1 + '$ ' + result);
    });

let money2 = 900000;
buyCar('BWM', money2)
    .then((result) => {
        console.log(money2 + '$ ' + result);
    })
    .catch((result) => {
        console.log(money2 + '$ ' + result);
    });