addEventListener('message' ,function (event){
    const resultado2 = event.data;
    var total = 1;
    if(resultado2===1|| resultado2===0){
        return 1;
    }else{
        
        for(i=1;i<=resultado2;i++){
            total=total*i;
        }
        postMessage(total);

    }
})

