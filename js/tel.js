tel.addEventListener('keypress', () =>{
    let tellength = tel.value.length
    if(tellength === 0 ){
        tel.value += '('
    }else if(tellength === 9){
        tel.value += '-'
    }else if( tellength === 3){
        tel.value += ')'
    }
    console.log(tellength);
})