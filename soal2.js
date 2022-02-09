
// function dropRight(arr, drop) {
//     console.log(arr.splice(drop));
// }
// dropRight([1, 2, 3])
// dropRight([1, 2, 3], 2)
// dropRight([1, 2, 3], 5)
// dropRight([1, 2, 3], 0)

// function dropRight(number){
//     const removed = number.filter(el => {
//         return el <= 2
//     })
//     console.log(removed);
// }
// dropRight([1, 2, 3])



// function dropRight(number){
//     const removed = number.filter(el => {
//         return el < 2
//     })
//     console.log(removed);
// }
// dropRight([1, 2, 3],2)


// function dropRight(number){
//     const removed = number.filter(el => {
//         return el < 1
//     })
//     console.log(removed);
// }
// dropRight([1, 2, 3], 5)



function dropRight(number){
    const removed = number.filter(el => {
        return el => 2
    })
    console.log(removed);
}
dropRight([1, 2, 3], 0)