
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-5',
    template: `<div class="benchmark-component">
    <h3>Component 5</h3>
    <button type="button" (click)="increment5()">
      Count {{ count5() }}
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
  export class BenchmarkNg5 {
    count5 = signal(0);

    increment5() {
      this.count5.update((count) => count + 1);
    }
  }