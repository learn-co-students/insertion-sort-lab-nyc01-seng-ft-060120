function findMinAndRemove(array){
    let minIndex=0, min=array[0]
    for (let i=0; i<array.length; i++) {
        if (array[i]<min) {
            minIndex = i
            min=array[i]
        }
    }
    array.splice(minIndex, 1)
    return min
}

function selectionSort(array){
    let sortedArray = [], numElements=array.length
    for (let i=0; i<numElements; i++) {
        sortedArray.push(findMinAndRemove(array))
    }
    return sortedArray
}
