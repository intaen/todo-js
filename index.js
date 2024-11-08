// Todo

const database = []

class Todo {
    constructor(id = 0, task = "", status = false) {
        this.id = id
        this.task = task
        this.status = status
    }
}

const todo1 = new Todo(1, "Belajar Javascript", true)
const todo2 = new Todo(2, "Belajar React Native", false)
const todo3 = new Todo(3, "Belajar React JS", false)

const create = (data1, data2, data3) => {
    database.push(data1, data2, data3)
    console.log("Create: ", database)
}

const getAll = () => {
    console.log("Get All: ")
    return database
}


const getById = (id) => {
    for (let i = 0; i<database.length; i++) {
        if (database[i].id == id) {
            console.log("Get By ID: ")
            return database[i]
        }
    }
}

const updateById = (id, task, status) => {
    const db = database.find(t => t.id == id)
    
    console.log("Before Update By ID: ")
    console.log(db)
    db.task = task
    db.status = status

    console.log("After Update By ID: ")
    return db
}

const deleteById = (id) => {
    const db = database.find(t => t.id == id)
    database.pop(db)
    console.log("Delete By ID: ", db)
}

create(todo1, todo2, todo3)
console.log(getAll())
console.log(getById(2))
console.log(updateById(1, "Belajar Update di Javascript", true))
deleteById(3)
console.log(getAll())