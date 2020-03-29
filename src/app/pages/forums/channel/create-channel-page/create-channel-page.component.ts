import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-channel-page',
  templateUrl: './create-channel-page.component.html',
  styleUrls: ['./create-channel-page.component.scss']
})
export class CreateChannelPageComponent implements OnInit {

  data = {
    title: '',
    subtitle: '',
    description: '',
    location: '',
    color: '',
    private: '',
    imageSrc: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
