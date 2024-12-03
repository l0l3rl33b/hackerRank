
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
