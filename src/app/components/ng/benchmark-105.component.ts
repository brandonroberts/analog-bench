
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-105',
    template: `<div class="benchmark-component">
    <h3>Component 105</h3>
    <button type="button" (click)="increment105()">
      Count {{ count105() }}
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
  export class BenchmarkNg105 {
    count105 = signal(0);

    increment105() {
      this.count105.update((count) => count + 1);
    }
  }