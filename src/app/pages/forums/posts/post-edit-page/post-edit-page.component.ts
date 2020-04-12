import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-edit-page',
  templateUrl: './post-edit-page.component.html',
  styleUrls: ['./post-edit-page.component.scss']
})
export class PostEditPageComponent implements OnInit {

  
  forumPostId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe().subscribe(param => {
      this.forumPostId = param.id;
    });
  }

}
