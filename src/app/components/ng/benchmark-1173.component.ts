
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1173',
    template: `<div class="benchmark-component">
    <h3>Component 1173</h3>
    <button type="button" (click)="increment1173()">
      Count {{ count1173() }}
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
  export class BenchmarkNg1173 {
    count1173 = signal(0);

    increment1173() {
      this.count1173.update((count) => count + 1);
    }
  }