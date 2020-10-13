import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-manager.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public json: UserService) { 
  this.json.getPerson('https://gist.githubusercontent.com/kathcode/9bd4687b15bb921947c118857adae5ce/raw/fa79414ffc30bdae6e7e1cb70f229982956d96c0/getGreatPerson.json')
  .subscribe((res: any)=> { 
   console.log(res);
  });

 }

  ngOnInit(): void {
  }

}
