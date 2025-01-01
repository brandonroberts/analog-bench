
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-739',
    template: `<div class="benchmark-component">
    <h3>Component 739</h3>
    <button type="button" (click)="increment739()">
      Count {{ count739() }}
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
  export class BenchmarkNg739 {
    count739 = signal(0);

    increment739() {
      this.count739.update((count) => count + 1);
    }
  }