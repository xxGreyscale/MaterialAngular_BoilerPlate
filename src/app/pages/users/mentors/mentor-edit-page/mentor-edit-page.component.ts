import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-edit-page',
  templateUrl: './mentor-edit-page.component.html',
  styleUrls: ['./mentor-edit-page.component.scss']
})
export class MentorEditPageComponent implements OnInit {

  
  mentorId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe().subscribe(param => {
      this.mentorId = param.id;
    });
  }

}
