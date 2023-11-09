import { Component } from '@angular/core';
import { ApiServiceService } from '../API/api-service.service';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
constructor(private apiservice:ApiServiceService, private router:Router){

}
type:string ='';
city:string ='';
name:string ='';
 selectedCategory: string = 'by_name';
searchResults: any[] = [];
navigateToFeedbackPage(selectedResult: any) {
  this.router.navigate(['/feedback'], { state: { data: selectedResult } });
}
search() {
  switch (this.selectedCategory) {
    case 'by_name':
      this.apiservice.getdatabyName(this.name).subscribe((data: any) => {
        this.searchResults = data;
      });
      break;
    case 'by_city':
      this.apiservice.getdatabyCity(this.city).subscribe((data: any) => {
        this.searchResults = data;
      });
      break;
    case 'by_type':
      this.apiservice.getdatabyType(this.type).subscribe((data: any) => {
        this.searchResults = data;
      }, error => {
        console.log("Error");
      });
      break;
    default:
      break;
  }
}
}