import { Component, OnInit, ViewChild, NgZone, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { RequestsService } from 'src/app/services/request-provider.service';

@Component({
  selector: 'app-channel-form-component',
  templateUrl: './channel-form-component.component.html',
  styleUrls: ['./channel-form-component.component.scss']
})
export class ChannelFormComponentComponent implements OnInit {

  @Input() formData;
  channelForm: any;
  imageSrc: string;



  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  onContentChange(e) {
    // restrict length first
    if (e.editor.getLength() > 250) {
      e.editor.deleteText(250, e.editor.getLength());
    }
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  constructor(private _ngZone: NgZone, private fb: FormBuilder, private requestService: RequestsService) {
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
    const payload = {
      title: this.channelForm.get('title').value,
      subtitle: this.channelForm.get('subtitle').value,
      description: this.channelForm.get('description').value,
      location: this.channelForm.get('location').value,
      color: this.channelForm.get('color').value,
      order: 0
    };

    this.createChannel(payload);
  }

  // ********* Chaning of image as user input
  onFileChange(fileInput: any) {
    this.imageSrc = this.channelForm.get('coverphoto').value.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(fileInput.target.files[0]);
  }

  createChannel(payload: any) {
    this.requestService.endPoint = 'forums/channels';
    this.requestService.create(payload).subscribe(response => {
      console.log(response);
    });
  }

  addAnother() {

  }

}
