import { Component, OnInit } from '@angular/core';
import { TravelBlog } from '../../shared/travel-blog/travel-blog.interface';
import { TravelBlogService } from './travel-blog.service';

@Component({
  selector: 'travel-blog',
  templateUrl: './travel-blog.component.html',
  styleUrls: ['./travel-blog.component.scss']
})
export class TravelBlogComponent implements OnInit {
  blogs: TravelBlog[];
  constructor(private service: TravelBlogService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    let form = {}
    this.service.getAllBlogs(form).subscribe(data => {
      this.blogs = data;
    });
  }
}
