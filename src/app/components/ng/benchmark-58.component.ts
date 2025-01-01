
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-58',
    template: `<div class="benchmark-component">
    <h3>Component 58</h3>
    <button type="button" (click)="increment58()">
      Count {{ count58() }}
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
  export class BenchmarkNg58 {
    count58 = signal(0);

    increment58() {
      this.count58.update((count) => count + 1);
    }
  }