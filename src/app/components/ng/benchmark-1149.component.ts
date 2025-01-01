
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1149',
    template: `<div class="benchmark-component">
    <h3>Component 1149</h3>
    <button type="button" (click)="increment1149()">
      Count {{ count1149() }}
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
  export class BenchmarkNg1149 {
    count1149 = signal(0);

    increment1149() {
      this.count1149.update((count) => count + 1);
    }
  }