
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-160',
    template: `<div class="benchmark-component">
    <h3>Component 160</h3>
    <button type="button" (click)="increment160()">
      Count {{ count160() }}
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
  export class BenchmarkNg160 {
    count160 = signal(0);

    increment160() {
      this.count160.update((count) => count + 1);
    }
  }