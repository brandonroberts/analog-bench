
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-523',
    template: `<div class="benchmark-component">
    <h3>Component 523</h3>
    <button type="button" (click)="increment523()">
      Count {{ count523() }}
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
  export class BenchmarkNg523 {
    count523 = signal(0);

    increment523() {
      this.count523.update((count) => count + 1);
    }
  }