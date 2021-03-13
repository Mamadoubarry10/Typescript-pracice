class Department {
    name: string;
    private employees: string[] = [];

    constructor(n:string){
        this.name = n
        
    }

    describe(this: Department){
        console.log(`deparment: ${this.name}`)
    }

    addemployee(employee:string){
        this.employees.push(employee)
    }
}

const accounting = new Department('Accounting')
accounting.addemployee("Mamadou")
accounting.addemployee("james")
console.log(accounting)