
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1388',
    template: `<div class="benchmark-component">
    <h3>Component 1388</h3>
    <button type="button" (click)="increment1388()">
      Count {{ count1388() }}
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
  export class BenchmarkNg1388 {
    count1388 = signal(0);

    increment1388() {
      this.count1388.update((count) => count + 1);
    }
  }