
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-586',
    template: `<div class="benchmark-component">
    <h3>Component 586</h3>
    <button type="button" (click)="increment586()">
      Count {{ count586() }}
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
  export class BenchmarkNg586 {
    count586 = signal(0);

    increment586() {
      this.count586.update((count) => count + 1);
    }
  }