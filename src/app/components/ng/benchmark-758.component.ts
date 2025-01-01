
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-758',
    template: `<div class="benchmark-component">
    <h3>Component 758</h3>
    <button type="button" (click)="increment758()">
      Count {{ count758() }}
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
  export class BenchmarkNg758 {
    count758 = signal(0);

    increment758() {
      this.count758.update((count) => count + 1);
    }
  }