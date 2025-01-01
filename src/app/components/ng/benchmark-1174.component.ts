
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1174',
    template: `<div class="benchmark-component">
    <h3>Component 1174</h3>
    <button type="button" (click)="increment1174()">
      Count {{ count1174() }}
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
  export class BenchmarkNg1174 {
    count1174 = signal(0);

    increment1174() {
      this.count1174.update((count) => count + 1);
    }
  }