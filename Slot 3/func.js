// let square = (num) => num * num

// console.log("5*5 = " + square(5));

// kiểm tra số nguyên tố

let kiemTraSoNguyenTo = (num) => {
    let loop = true;
    let i = 2;
    while (i <= Math.sqrt(num) && loop) {
        if (num % i == 0) {
            console.log(num + " không phải số nguyên tố");
            loop = false;
        }
        i++;
        if (i >= Math.sqrt(num)) {
            console.log(num + " là số nguyên tố");
            loop = false;
}
    }
    }

kiemTraSoNguyenTo(19);