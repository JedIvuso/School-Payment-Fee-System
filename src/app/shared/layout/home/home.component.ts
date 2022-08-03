import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isCollapsed = false;

  listOfData: Array<{ 
    contributor: string; amount: number; status: string; date: string; paymentmethod: string;  
  }> = [];

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.listOfData.push({
        contributor: `Edward King`,
        amount: 32,
        status: `Completed`,
        date: `8/2/2022`,
        paymentmethod: `Safaricom: Mpesa`
      });
    }
  }


}
