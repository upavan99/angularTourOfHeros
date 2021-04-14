import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes9';

  //1 String
studentId: string = 'c09123';
studentName: string = 'John'; 
studentPhno: string = '000000000';


//2 number

studentAge: number = 25;
studentMarks: number = 70.5;


//3 boolean

protected: boolean = false;

//4 array

studentsmarkslist: number[] =  [60,70,80,100,90];

studentNames: string[] = ['John','Tom','Mike'];


//5 Object 

student: any = {id:'CT711', name:'p1' , email:'john@gmail.com'};


//6 array of objects

studentList: any =[
{ id: 'Ct723' , name: 'p2', email :'john1@gmail.com' },
{id: 'ct724' , naname: 'p3', email: 'john2@gmail.com'},
{id: 'ct725', name:'p4', email:'john3@gmail.com'}
];

  customerName: any = [
    { customId: 'P7T123', customName: 'John1', prodName: 'Tshirt' },
    { customid: 'P8T123', customName: 'John2', prodname: 'Jeans' },
  ];
  amzonCustomer: any = [
    {
      customId: 'P7T123',
      customName: 'John1',
      products: [
        { pId: 1, pName: 'xbox',},
        { pId: 2, pName: 'xbox5' },
        { pId: 3, pName: 'xbox-s' }]
    },
    {customId:'P7T123' ,
    customName:'John1' , 
    product:'vr'

    },
    {customId:'P7T123',
     customname:'John2' ,
     products:[
       {Pid: 1, pname:'toy'},
       {pid:2 , pname:'toy2'}]

    }

  ];
}


