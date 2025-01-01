
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-53',
    template: `<div class="benchmark-component">
    <h3>Component 53</h3>
    <button type="button" (click)="increment53()">
      Count {{ count53() }}
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
  export class BenchmarkNg53 {
    count53 = signal(0);

    increment53() {
      this.count53.update((count) => count + 1);
    }
  }