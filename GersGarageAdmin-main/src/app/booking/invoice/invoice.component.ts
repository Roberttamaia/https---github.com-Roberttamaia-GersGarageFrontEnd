import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { MatDialog } from '@angular/material/dialog';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit{
  public invoices: any =  [];
constructor(private appService : AppService,private dialog : MatDialog){
  
}
ngOnInit(): void {
  this.appService.getInvoice()
  .subscribe(data => this.invoices = data);
}

public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a5');
    let position = 5;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('invoice.pdf');
  });
}
openDialog(){
  this.dialog.open(NewInvoiceComponent);
}

}



  