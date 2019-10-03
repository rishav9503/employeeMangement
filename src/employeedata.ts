export class Employee {
    constructor(
        public id: number = 0,
        public name: string = "",
        public age: number = 0,
        public gender: string = "",
       
        public tempAddress:{}= {
                street: '',
                city: '',
                state: '',
                country: '',

            },
          public  permanentAddress:{}= {
                street: '',
                city: '',
                state: '',
                country: '',
            },

    
         
        public  homeContact:{}= {
                email: '',
                phone: ''
            },
         public   workContact:{}= {
                email: '',
                phone: ''
            }
        



    ) { }
}