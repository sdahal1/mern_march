//create a helper function that takes 2 already sorted array, and combines them into one sorted array and returns that new sorted array

const combineSortedArrays = (arr1, arr2) => {
    //result array that will contain values from both the input arrays
    let result = []
    let i = 0
    let j = 0

    // while the itterater for the first array is less than the length of the first array and while the itterater of the second array is less than the length of the second array
    while(i < arr1.length && j < arr2.length){
        // compare the value at the first array at index i with thte value at the second array at index j to see which one is smaller
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }
        else{
            result.push(arr2[j])
            j++
        }

    }
    //check to see if there is any remaining values in the first array, and if they are just push them to results
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }

    //check to see if there is any remaining values in the second array, and if they are just push them to results
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    //at the end
    return result
}


// console.log(combineSortedArrays([1,3,5,5], [2,3,4,9,10,11,15]))
// console.log(combineSortedArrays([1], [3]))




//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/



const mergeSort = (arr)=>{

    if(arr.length<=1){
        return arr;
    }    
    //goal is to recieve one unsorted array and break that arrray up into halves
    let mid = Math.floor(arr.length/2)
    //arr.slice() lets you create a new sub array form the original array
    let leftHalf = arr.slice(0, mid);
    console.log("left half -->", leftHalf)

    let rightHalf = arr.slice(mid);
    console.log("right half -->", rightHalf)

    // mergeSort(leftHalf)
    // mergeSort(rightHalf)
    return combineSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf))


}


console.log(mergeSort([5,4,0,9,2,3,1]))