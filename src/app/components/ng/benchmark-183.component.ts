
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-183',
    template: `<div class="benchmark-component">
    <h3>Component 183</h3>
    <button type="button" (click)="increment183()">
      Count {{ count183() }}
    </button>
  </div>`,
  styles: `
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
  `,
    standalone: true,
  })
  export class BenchmarkNg183 {
    count183 = signal(0);

    increment183() {
      this.count183.update((count) => count + 1);
    }
  }