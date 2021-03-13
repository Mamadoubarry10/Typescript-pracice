class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name:string){
        
    }

    describe(this: Department){
        console.log(`deparment: ${this.name}`)
    }

    addemployee(employee:string){
        this.employees.push(employee)
    }
}

class ITDeprtment extends Department{
    admins: string[]
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins
    }
}

const NewITDepartment = new ITDeprtment("d2", ['Max','randle'])
// const accounting = new Department('D1','Accounting')
NewITDepartment.addemployee("Mamadou")
NewITDepartment.addemployee("james")

console.log(NewITDepartment)