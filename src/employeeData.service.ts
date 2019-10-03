import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employeedata';

export class employeeData implements InMemoryDbService {
    createDb() {
        const employeeDatas: Employee[] = [
            {
                id: 0,
                name: 'Rishav',
                age: 0,
                gender: 'Male',
                tempAddress: {
                    street: '22 Rue du Grenier Saint-Lazare',
                    city: 'Paris',
                    state: 'Paris',
                    country: 'France',

                },
                permanentAddress: {
                    street: '2nd Garkari Marg Estate',
                    city: 'Pune',
                    state: 'Maharashtra',
                    country: 'India',
                },



                homeContact:   {
                    email: 'home@mail.com',
                    phone: '8884864736'
                },
                workContact: {
                    email: 'work@mail.com',
                    phone: '9994864736'
                }
            }






        ];
        return { employeeDatas };
    }
}