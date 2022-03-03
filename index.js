function pickPropArray(data,prop){
    const result = [];
    for (let item of data.values()){
        if (item[prop] != null) result.push(item[prop])
    }
    return result
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20, city:'tmn' },
    { age: 40 },
    
]

const result = pickPropArray(students, 'city')
console.log(result)
    

function createCounter(){
    let count = 0
    return function () {
        count++
        console.log(count)
        return count
    }
}

const counter1=createCounter()
counter1()
counter1()

let spinStr = currItem=> {
    if (currItem.length>=5){
        return currItem.split('').reverse().join('')
    }
    else return currItem
}

function spinWords(word){
    let result=[]
    let listSplitWords= word.split(' ')
    for (let currItem of listSplitWords){
        result.push(spinStr(currItem))
    }
    return result.join(" ")
}

const result1 = spinWords("Привет из Legacy")
console.log(result1)
const result2=spinWords("This is a test")
console.log(result2)

