import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'my-third-project';
 public firstAngle!:number;
 public secondAngle!:number;
 public thirdAngle!:number;
 public result!:string;

 get_result()
 {
   if(this.firstAngle+this.secondAngle+this.thirdAngle <= 180 && this.firstAngle > 0 && this.secondAngle > 0 && this.thirdAngle > 0)
    {
      if(this.firstAngle == 90 || this.secondAngle == 90 || this.thirdAngle == 90)
        {
          this.result = "Right Triangle"; ;
        }
      else if(this.firstAngle > 90 || this.secondAngle > 90 || this.thirdAngle > 90)
        {
          this.result ="Obtuse Triangle"; 
        }
      else
        {
          this.result = "Acute Triangle";
        }
    }
    else
    {
      this.result = "Not a Triangle";
    }
    
 }
}
