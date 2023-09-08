import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter.component";



@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ],
    imports: [],
    providers: [],
    bootstrap: []
})
export class CounterModule {

}