import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-channel-page',
  templateUrl: './create-channel-page.component.html',
  styleUrls: ['./create-channel-page.component.scss']
})
export class CreateChannelPageComponent implements OnInit {

  channelId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe().subscribe(param => {
      this.channelId = param.id;
    });
  }

}
