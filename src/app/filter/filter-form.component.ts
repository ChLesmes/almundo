import {Component, OnInit, HostListener, Input} from '@angular/core';
import { Filter } from './filter.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit{
  @Input() filter: Filter;
  panelOpenState: boolean = true;
  checks: boolean[] = [true,false,false,false,false,false];
  textFilter: string;
  widhtScreen: number = 992;

  constructor(private app: AppComponent) { }

  ngOnInit(){
    this.validateWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target']) onResize = ({ innerWidth }) => {
    this.validateWidth(innerWidth);
  };

  validateWidth: any = (widht) => {
    this.panelOpenState = !(widht<this.widhtScreen);
    this.textFilter = (widht<this.widhtScreen)?'Filtrar':'Filtros';
  };

  updateStar(index){

    if (this.checks[0] && index === 0){
      this.checks.fill(false);
      this.checks[0]=true;
    }else if (!this.checks[0] && index === 0){
      this.checks[1] = true;
    }else if(!this.checks.find((e)=>e)){
      this.checks[0] = true;
    }/*else if(this.checks.find((e, i)=>(!e && i>0))!==false){
      this.checks.fill(false);
      this.checks[0]=true;
    }*/else if (index > 0) {
      this.checks[0] = false;
    }
    this.filter.stars = [];
    if (!this.checks[0]){
      for (let i=1; i<this.checks.length; i++) {
        if (this.checks[i]) {
          this.filter.stars.push(6-i);
        }
      }
    }
    this.app.updateFilter(this.filter);

  }

}
