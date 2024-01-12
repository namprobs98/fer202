let binh_phuong = (number) => {
    console.log(number*number);
}

let kiem_tra_chan_le = (number) => {
    if(number%2 ==0){
        console.log(`${number} la so chan`)
    }
    else if(number%2 ==1){
        console.log(`${number} la so le`)
    }
}

kiem_tra_chan_le(6)