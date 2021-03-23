function remove(input1, input2){

    const tempArray = []

    
    for (i = 0; i <= input1.length; i++){
        if(input1[i] !== input2){
            tempArray.push(input1[i]);
        } 

        
    }

    tempArray.pop()

    return(tempArray)
    
}

module.exports = remove