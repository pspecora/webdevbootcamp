function echo(string, num){
    for(var i = 0; i<num;i++){
        console.log(string);
    }
}

echo("Echo", 10);

echo("TT", 3);

function average(arr){
    var sum = 0;
    var len = arr.length;
    for(var i=0; i<len; i++){
        sum=+arr[i];
    }
    return Math.round(sum/len);
}