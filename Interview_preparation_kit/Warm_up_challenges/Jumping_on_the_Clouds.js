function jumpingOnClouds(c) {
    let check_pos= 0;
    let count = 0;
    while(check_pos < c.length-1){
        if(c[check_pos + 2]== 0){
            check_pos += 2;
            count++;
        }else{
            check_pos += 1;
            count++;
        }
    }
    return count;
}
