import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-topics-form-component',
  templateUrl: './topics-form-component.component.html',
  styleUrls: ['./topics-form-component.component.scss']
})
export class TopicsFormComponent implements OnInit {

  @Input() formData;
  channelForm: any;

  constructor(private fb: FormBuilder) {
    this.channelForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required],
      location: [''],
      color: [''],
      coverphoto: [''],
      private: [''],
    });
   }

  ngOnInit(): void {
  }


  onSubmit() {
    
  }

}
