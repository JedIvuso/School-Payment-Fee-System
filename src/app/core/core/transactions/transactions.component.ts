import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

interface ParentItemData {
  key: number;
  contributor: string;
  amount: number | string;
  status: string;
  date: number | string;
  paymentmethod: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  status: string;
  refno: string;
  studentregno: string;
  amount: string;
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionsComponent implements OnInit{
  isCollapsed = false;
  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 8; ++i) {
      this.listOfParentData.push({
        key: i,
        contributor: 'Screem',
        amount: 'ksh 1000',
        status: 'completed',
        date: '8/23/2022',
        paymentmethod: 'Safaricom: M-pesa',
        expand: false
      });
    }
    for (let i = 0; i < 1; ++i) {
      this.listOfChildrenData.push({
        key: i,
        status: 'Pending',
        refno: 'OME678KA1J',
        studentregno: '17G01ABT006',
        amount: 'KSH 4650'
      });
    }
  }
}


    

//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
    
//   }
//   title = 'angularmaterial';

//   Columns names, table data from datasource, pagination and sorting

//   columnsToDisplay: string[] = ['Contributor', 'Amount', 'Status', 'Date', 'Payment Method'];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
//   @ViewChild(MatPaginator, {static: true}) paginator:any = MatPaginator;
//   expandedElement: PeriodicElement | null | undefined;
//   columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
// }

// Columns data types

// export interface PeriodicElement {
//   Contributor: string;
//   Amount: string;
//   Status: string;
//   Date: string;
//   Paymentmethod: string;
//   description: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     Contributor: 'Grace Jacobs',
//     Amount: 'KSH 5000',
//     Status: 'completed',
//     Date: 'June 11th 2022',
//     Paymentmethod: 'Safaricom: mpesa',
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
//   }, {
//     Contributor: 'Grace Jacobs',
//     Amount: 'KSH 5000',
//     Status: 'completed',
//     Date: 'June 11th 2022',
//     Paymentmethod: 'Safaricom: mpesa',
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
//   }, {
//     Contributor: 'Grace Jacobs',
//     Amount: 'KSH 5000',
//     Status: 'completed',
//     Date: 'June 11th 2022',
//     Paymentmethod: 'Safaricom: mpesa',
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
//   }, {
//     Contributor: 'Grace Jacobs',
//     Amount: 'KSH 5000',
//     Status: 'completed',
//     Date: 'June 11th 2022',
//     Paymentmethod: 'Safaricom: mpesa',
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
//   }, {
//     Contributor: 'Grace Jacobs',
//     Amount: 'KSH 5000',
//     Status: 'completed',
//     Date: 'June 11th 2022',
//     Paymentmethod: 'Safaricom: mpesa',
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
//   },
// ];
