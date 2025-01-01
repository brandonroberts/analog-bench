
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1105',
    template: `<div class="benchmark-component">
    <h3>Component 1105</h3>
    <button type="button" (click)="increment1105()">
      Count {{ count1105() }}
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
  export class BenchmarkNg1105 {
    count1105 = signal(0);

    increment1105() {
      this.count1105.update((count) => count + 1);
    }
  }