
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1096',
    template: `<div class="benchmark-component">
    <h3>Component 1096</h3>
    <button type="button" (click)="increment1096()">
      Count {{ count1096() }}
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
  export class BenchmarkNg1096 {
    count1096 = signal(0);

    increment1096() {
      this.count1096.update((count) => count + 1);
    }
  }