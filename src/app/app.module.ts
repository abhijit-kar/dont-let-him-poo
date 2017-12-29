import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// App Root
import { AppComponent } from "./app.component";

// Feature Modules
import { FeaturesModule } from "./features/features.module";

// Routing Modules
import { AppRoutingModule } from "./app.routing";

import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "dont-let-him-pou" }),
    SharedModule,
    FeaturesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
