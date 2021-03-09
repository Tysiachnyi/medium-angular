import {Component, OnInit} from '@angular/core';
import {HttpJsonPlaceholderService} from '../../services/http-json-placeholder.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  posts: any;
  constructor(private httpJsonService: HttpJsonPlaceholderService) {}

  ngOnInit(): void {
    this.httpJsonService.getAllPosts().subscribe(result => {
      this.posts = result;
      console.log(this.posts);
    });
  }
}
