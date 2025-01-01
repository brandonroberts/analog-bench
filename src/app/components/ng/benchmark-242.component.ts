
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-242',
    template: `<div class="benchmark-component">
    <h3>Component 242</h3>
    <button type="button" (click)="increment242()">
      Count {{ count242() }}
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
  export class BenchmarkNg242 {
    count242 = signal(0);

    increment242() {
      this.count242.update((count) => count + 1);
    }
  }