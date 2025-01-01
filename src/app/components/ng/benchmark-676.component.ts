
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-676',
    template: `<div class="benchmark-component">
    <h3>Component 676</h3>
    <button type="button" (click)="increment676()">
      Count {{ count676() }}
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
  export class BenchmarkNg676 {
    count676 = signal(0);

    increment676() {
      this.count676.update((count) => count + 1);
    }
  }