import { Component } from '@angular/core';
import { TestListService } from 'src/app/services/test-service/test-list.service';

@Component({
  selector: 'app-component-service',
  templateUrl: './component-service.component.html',
  styleUrls: ['./component-service.component.css']
})
export class ComponentServiceComponent{
  constructor(private service: TestListService){

  }

  callService(){
    this.service.alertService();
  }

}
