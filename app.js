const users = [
    {userName: 'mlewis'},
    {userName: 'akagen'},
    {userName: 'msmith'}
]

function findUserByUsername(arr, str){
    return arr.find(function(val){
        return val.userName === str
    })
}

function removeUser(arr, str){
    let index = arr.findIndex(function(val){
        return val.userName === str
    })
    return arr.splice(index,1)
     
}