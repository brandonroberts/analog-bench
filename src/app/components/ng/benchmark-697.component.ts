
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-697',
    template: `<div class="benchmark-component">
    <h3>Component 697</h3>
    <button type="button" (click)="increment697()">
      Count {{ count697() }}
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
  export class BenchmarkNg697 {
    count697 = signal(0);

    increment697() {
      this.count697.update((count) => count + 1);
    }
  }