const getDivisors = (num) => {
    let list = [];
    for (let i = 1 ; i < num ; i++){
        if(num%i===0){
            list.push(i);
        }
    }
    list.push(num);
    console.log(list)
}