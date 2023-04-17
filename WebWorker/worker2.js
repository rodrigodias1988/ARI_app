addEventListener('message' ,function (event){
    const resultado = event.data;
    var total = 1;

        if(resultado===1|| resultado===0){
            return 1;
        }else{
        
        for(i=1;i<=resultado;i++){
            total=total*i;
        }
        postMessage(total);
    }
})