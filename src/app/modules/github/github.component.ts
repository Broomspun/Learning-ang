import { Component, OnInit } from '@angular/core';
import { GithubService} from '../../services/github/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  title = 'Github Search';

  constructor(private  githubservice: GithubService) {
    console.log(githubservice.getUser());
  }

  ngOnInit() {
  }

}
