
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-830',
    template: `<div class="benchmark-component">
    <h3>Component 830</h3>
    <button type="button" (click)="increment830()">
      Count {{ count830() }}
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
  export class BenchmarkNg830 {
    count830 = signal(0);

    increment830() {
      this.count830.update((count) => count + 1);
    }
  }