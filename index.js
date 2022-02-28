function createCounter(data,prop){
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
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

const result = createCounter(students, 'name')
console.log(result)
    