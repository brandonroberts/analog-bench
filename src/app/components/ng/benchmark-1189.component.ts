
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1189',
    template: `<div class="benchmark-component">
    <h3>Component 1189</h3>
    <button type="button" (click)="increment1189()">
      Count {{ count1189() }}
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
  export class BenchmarkNg1189 {
    count1189 = signal(0);

    increment1189() {
      this.count1189.update((count) => count + 1);
    }
  }