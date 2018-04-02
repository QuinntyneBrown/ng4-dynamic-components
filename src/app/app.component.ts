import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit, Injector } from "@angular/core";
import { CardComponent } from "./shared/card.component";

@Component({
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "ce-app"
})
export class AppComponent implements AfterViewInit {
    
    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector
    ) {
        
    }

    @ViewChild("target", { read: ViewContainerRef }) 
    target: ViewContainerRef;

    public ngAfterViewInit() {
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(CardComponent);

        var cardComponentRef = this.target.createComponent(componentFactory, null, this._injector);

        cardComponentRef.instance.value = 10;

        setTimeout(() => cardComponentRef.destroy(), 10000);
        
    }
}
