

class Test {
    constructor() {
        this.array = []
    }

    push(item) {
        this.array.push(item)
    }
    arr() {
        return this.array
    }
}

let newArray = new Test();

newArray.push({'Title': 'Name', 'Author': "Mark"});
newArray.push({'Title': 'Name2'});
// console.log(newArray.array)

newArray.array.forEach((item, index) => {
    console.log(item)
})
