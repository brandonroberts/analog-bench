
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1246',
    template: `<div class="benchmark-component">
    <h3>Component 1246</h3>
    <button type="button" (click)="increment1246()">
      Count {{ count1246() }}
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
  export class BenchmarkNg1246 {
    count1246 = signal(0);

    increment1246() {
      this.count1246.update((count) => count + 1);
    }
  }