import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {CardComponent} from "./card.component";

const declarables = [CardComponent];
const entryComponents = [
    CardComponent
];
const providers = [];

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers,
    entryComponents: entryComponents
})
export class SharedModule { }
