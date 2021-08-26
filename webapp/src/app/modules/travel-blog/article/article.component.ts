import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelBlog } from '../../../shared/travel-blog/travel-blog.interface';
import { TravelBlogService } from '../travel-blog.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: TravelBlog;
  isEditing: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TravelBlogService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.article = data.article;
    });
  }

  back() {
    this.router.navigate([`/app/travel-blog`], {relativeTo: this.route});
  }

  edit() {
    this.isEditing = true;
  }

  save() {
    this.service.saveBlog(this.article).subscribe(savedArticle => {
        this.isEditing = false;
    });
  }
}
