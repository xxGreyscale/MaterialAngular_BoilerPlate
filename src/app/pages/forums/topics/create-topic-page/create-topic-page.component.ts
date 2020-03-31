import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-topic-page',
  templateUrl: './create-topic-page.component.html',
  styleUrls: ['./create-topic-page.component.scss']
})
export class CreateTopicPageComponent implements OnInit {
  topicId: any;
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.params.pipe().subscribe(param => {
      this.topicId = param.id;
      if (this.topicId) {
      }
    });
  }

}
