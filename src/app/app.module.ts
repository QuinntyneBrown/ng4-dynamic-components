import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { CardComponent } from "./card.component";

@NgModule({
    declarations: [AppComponent, CardComponent],
    imports: [
        BrowserModule,
        HttpModule
    ],
    entryComponents: [
        CardComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export * from "./environment";