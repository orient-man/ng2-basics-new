import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'personal-data',
  templateUrl: 'app/view-interpolation-examples/personal-data.component.html',
  styleUrls: ['app/view-interpolation-examples/personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
    fullName = "Marcin Malinowski";
    login = "orientman";
    email = "orientman@gmail.com";

    ngOnInit(): void {

    }
}
