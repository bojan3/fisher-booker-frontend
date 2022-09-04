import { UrlHandlingStrategy } from "@angular/router";
import { StatusName } from "./StatusName";
export class Status {
    
    id: number;
    name: StatusName;
    points: number;
   
    constructor(id: number, name:StatusName, points:number) {
        this.id = id;
        this.name=name;
        this.points=points;
    }

      getStatus():String {
        return this.name.toString();
    }

      public getPictureUrl():String{
        if (this.name==StatusName.DIAMOND)
        return " ../../assets/images/diamond.png";
        if (this.name==StatusName.GOLD)
        return " ../../assets/images/medal1.png";
        if (this.name==StatusName.SILVER)
        return " ../../assets/images/medal2.png";
        if (this.name==StatusName.BRONZE)
        return " ../../assets/images/medal3.png";
        if (this.name==StatusName.REGULAR)
        return " ../../assets/images/insignia.png";
        else return"" ;
      }

}
