import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private alerify: AlertifyService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    // tslint:disable-next-line: no-string-literal
    this.userService.getUser(+this.route.snapshot.params['id'])
      .subscribe((user: User) => {
        this.user = user;
      }, error => {
        this.alerify.error(error);
      });
  }

}
