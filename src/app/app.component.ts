import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit } from "@angular/core";
import { CardComponent } from "./card.component";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "ce-app"
})
export class AppComponent implements AfterViewInit {
    
    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
        
    }

    @ViewChild("target", { read: ViewContainerRef }) 
    target: ViewContainerRef;

    public ngAfterViewInit() {
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(CardComponent);

        this.target.createComponent(componentFactory);
    }
}
