
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1250',
    template: `<div class="benchmark-component">
    <h3>Component 1250</h3>
    <button type="button" (click)="increment1250()">
      Count {{ count1250() }}
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
  export class BenchmarkNg1250 {
    count1250 = signal(0);

    increment1250() {
      this.count1250.update((count) => count + 1);
    }
  }