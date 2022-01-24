import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Table Dinamic: Angular ' + VERSION.major;

  title = ['Mes', 'Factor'];
  arrayMonts1 = ['January', 'February', 'March', 'April', 'May', 'June'];

  arrayMonts2 = [
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
