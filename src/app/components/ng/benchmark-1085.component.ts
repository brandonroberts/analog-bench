
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1085',
    template: `<div class="benchmark-component">
    <h3>Component 1085</h3>
    <button type="button" (click)="increment1085()">
      Count {{ count1085() }}
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
  export class BenchmarkNg1085 {
    count1085 = signal(0);

    increment1085() {
      this.count1085.update((count) => count + 1);
    }
  }