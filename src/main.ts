import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";


console.log("hello");

const arr = [5, 6, 7, 8, 0, 15];
const test = arr.filter((e) => e > 5);
console.log("test filter value is", test);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
