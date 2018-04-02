import { Component } from "@angular/core";

@Component({
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"],
    selector: "ce-card"
})
export class CardComponent {

    ngOnInit() {
        alert(this.value);
        setInterval(() => { this.value = this.value + 1; },1000);
    }
    value: number = 0;

    handleClick() {
        alert("click");
    }

    
}
