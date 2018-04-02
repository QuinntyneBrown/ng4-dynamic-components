import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export * from "./environment";