import {Department} from './department';
import {Person} from './person';

export class Employee {
  id: number;
  salary: number;
  person: Person;
  department: Department;
}
