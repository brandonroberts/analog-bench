
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1290',
    template: `<div class="benchmark-component">
    <h3>Component 1290</h3>
    <button type="button" (click)="increment1290()">
      Count {{ count1290() }}
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
  export class BenchmarkNg1290 {
    count1290 = signal(0);

    increment1290() {
      this.count1290.update((count) => count + 1);
    }
  }