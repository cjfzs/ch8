import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { StudentComponent } from '../student/student.component';

// export const route: Routes = [
//   { path: 'stable/:s.gender', component: StudentComponent }
// ];

@Component({
  selector: 'app-sform',
  templateUrl: './sform.component.html',
  styleUrls: ['./sform.component.css']
})
export class SformComponent implements OnInit {
  private sexquery: string;

  constructor() {

  }
  // constructor(private router: Routes, private route: ActivatedRoute) {
  //   route.params.subscribe(params => { this.sexquery = params['s.gender'] })
  // }

  ngOnInit() {
  }

}
