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
