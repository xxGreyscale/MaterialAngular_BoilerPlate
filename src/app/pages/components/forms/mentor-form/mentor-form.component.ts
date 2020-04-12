import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestsService } from 'src/app/services/request-provider.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.scss']
})
export class MentorFormComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  mentorForm: any;
  submitted: boolean;
  errors: any[];
  mentorId: any;
  mentor: any;
  gender: any[];
  countries: any[];

  constructor(private fb: FormBuilder,
              private requestService: RequestsService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) {
    this.mentorForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      gender: ['',],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      country:[''],
    });
   }

  ngOnInit() {
    this.route.params.pipe().subscribe(param => {
      this.mentorId = param.id;
      if (this.mentorId) {
        this.getMentor(this.mentorId);
      }
    });
  }


  onSubmit() {
    // we pass Ids for emails and genders
    if (this.mentorId) {
      const payload = {
        id: this.mentorId,
        fname: this.mentorForm.get('fname').value,
        lname: this.mentorForm.get('lname').value,
        gender: this.mentorForm.get('gender').value,
        email: this.mentorForm.get('email').value,
        phone: this.mentorForm.get('phone').value,
        country: this.mentorForm.get('country').value,
        date: this.mentorForm.get('date').value,
      };
      this.updateMentor(payload);
    } else {
      const payload = {
        fname: this.mentorForm.get('fname').value,
        lname: this.mentorForm.get('lname').value,
        gender: this.mentorForm.get('gender').value,
        email: this.mentorForm.get('email').value,
        phone: this.mentorForm.get('phone').value,
        country: this.mentorForm.get('country').value,
        date: this.mentorForm.get('date').value,

      };
      this.createMentor(payload);
    }
  }

  createMentor(payload: any) {
    this.requestService.endPoint = 'forums/mentors';
    this.requestService.create(payload).subscribe(response => {
      const responseCatcher: any = response;
      this.openSnackBar(responseCatcher.message, 'success');
    });
  }

  updateMentor(payload) {
    this.requestService.endPoint = 'forums/mentors';
    this.requestService.update(payload).subscribe(response => {
    const responseCatcher: any = response;
    this.openSnackBar(responseCatcher.message, 'success');
  });
  }

  getMentor(resourceId) {
    this.requestService.endPoint = 'forums/mentors';
    this.requestService.getWithId(resourceId).subscribe(response => {
      const responseCatcher: any = response;
      this.mentor = responseCatcher.data;
      this.fillInput(this.mentor);
    });
  }

  fillInput(resource: any) {
    // for gender, and country an Id will be return
    this.mentorForm.get('fname').setValue(resource.fname);
    this.mentorForm.get('lname').setValue(resource.lname);
    this.mentorForm.get('gender').setValue(resource.gender);
    this.mentorForm.get('email').setValue(resource.email);
    this.mentorForm.get('phone').setValue(resource.phone);
    this.mentorForm.get('country').setValue(resource.country);
}


  addAnother() {

  }

  goBack() {

  }

  showErrors(error) {
    this.submitted = false;
    this.errors = [];
    if (error['errors'] !== undefined) {
      for (let key in error['errors']) {
        if (error['errors'].hasOwnProperty(key)) {
          this.errors.push(error['errors'][key][0]);
        }
      }
    } else {
      this.errors.push(error['error']['message']);
    }
  }

  openSnackBar(response, classStatus) {
    this.snackBar.open(response, 'dismiss' , {
      duration: 2000,
      horizontalPosition: 'right',
      panelClass: [classStatus]
    });
  }

}
