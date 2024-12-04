
function repeatedString(s, n) {
    if(s.length == 1){
        return n;
    }else{
        
        let count = 0;
        while(s.length < n){
            s = s + s;
        }
        let newString = s.substr(0, n);
        
        for (let partString of newString) {
            if (partString === 'a') {
                count++;
            }
        }

        return count;
        }
   
}

//Solucion optimizada
function repeatedString(s, n) {
    const len = s.length;
    const rem = n % len;
    let totalA = 0;
    let remA = 0;

    // Contamos cuántas veces aparece 'a' en una repetición completa
    for(let i = 0; i < len; i++) {
        if(s[i] == 'a') {
            totalA++;  // Cuenta 'a' en la cadena completa
            if(i < rem) remA++;  // Cuenta 'a' en el "rem" restante
        }
    }

    // Calcula el número total de 'a's en las repeticiones completas y el resto
    return Math.floor(n / len) * totalA + remA;
}
