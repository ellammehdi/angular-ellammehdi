import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  
  template: `<h1>Hello {{name}} {{lname}}!</h1> 
             <h2>Number Of users is : {{NumberOfUsers}} Users</h2>
             <h2>Our Users: </h2>
             <p>USER1 is {{ user1}} & USER2 is {{ user2 }}</p>
             <p>Hi {{ user.fname}}</p>`,
  styles: [`h1 { font-family: Lato; }`],
  
  
})




export class HelloComponent  {
  @Input() name: string;
  @Input() lname: string;
  NumberOfUsers=2;
  user1="ElMehdi";
  user2="OuDinia";
  user: any = { fname: 'Siham' };

}
