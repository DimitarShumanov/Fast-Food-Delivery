import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
  
  subscribe() {
    this.toastr.success('Благодаря че се абонирахте за нашият бюлетин');
  }

  ngOnInit(): void {
  }

}
