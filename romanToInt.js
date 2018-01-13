function romanToInt(s) {
    var dict=[];
    var d= 0, i, j;
    for(i=0; i< s.length ; i++){
        if(s[i]==='I'){ dict.push(1);}
        else if(s[i]==='V'){ dict.push(5);}
        else if(s[i]==='X'){ dict.push(10);}
        else if(s[i]==='L'){ dict.push(50);}
        else if(s[i]==='C'){ dict.push(100);}
        else if(s[i]==='D'){ dict.push(500);}
        else if(s[i]==='M'){ dict.push(1000);}
    }    dict.push(0);
    for(j=0; j< dict.length-1; j++){
        if( dict[j] >= dict[j+1]){
            d += dict[j];
        } else{
            d += dict[j+1]- dict[j];
            j++;
        }        
    }
    return d;
};

console.log( romanToInt('DCXXI'));
