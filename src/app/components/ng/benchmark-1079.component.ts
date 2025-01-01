
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1079',
    template: `<div class="benchmark-component">
    <h3>Component 1079</h3>
    <button type="button" (click)="increment1079()">
      Count {{ count1079() }}
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
  export class BenchmarkNg1079 {
    count1079 = signal(0);

    increment1079() {
      this.count1079.update((count) => count + 1);
    }
  }