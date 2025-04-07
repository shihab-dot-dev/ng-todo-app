import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "todo";
}

function test() {
  const obj = { foo: "shihab", bar: "pm" };
  console.log(obj.bar);
  const arr = [1, 2, 5, 8, 9, 10, 15, 26, 78];
  return arr.filter((el) => {
    return el > 15;
  });
}

function testCol() {
  const ar = [2, 8, 10, 19, 89, 45, 50, 57, 58];
  ar.filter((el) => {
    return el > 15;
  });
}
console.log("returned value is", test());
