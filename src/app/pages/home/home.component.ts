import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  showLogin = false;
  // to access local reference #drawer from ts file I am using @ViewChild
  @ViewChild('drawer', { static: true }) drawer: any;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, public commonService: CommonService) {
    this.commonService.getIsDrawerOpenListener().subscribe((res: boolean)=>{
        this.drawer.toggle();
    });
  }

  ngOnInit(): void {

  }

  logout() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
      // timer: 3000,
      // timerProgressBar: true,
      title: 'Confirmation',
      text: 'Do you sure to save this result?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#1661a0',
      cancelButtonColor: '#d33',
      background: 'rgba(38,39,47,0.95)',
      confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.isConfirmed){
          this.authService.logout();
        }else{

        }
    });
  }
  logoutAll() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
      // timer: 3000,
      // timerProgressBar: true,
      title: 'Confirmation',
      text: 'Do you sure to save this result?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#1661a0',
      cancelButtonColor: '#d33',
      background: 'rgba(38,39,47,0.95)',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed){
        this.authService.logoutAll();
      }else{

      }
    });
  }
}
