const stringSplitter = (str:string, split:number) => {
    let arr = str.split(' ');
    let result:string[] = [];
    let i = 0;
    arr.forEach(element => {
        if (result[i]) {
            (result[i] + element + ' ').length < split ? result[i] += element + ' ' : i++;
        } else {
            result[i] = element + ' ';
        }
    });
    return result;
}

export default stringSplitter



