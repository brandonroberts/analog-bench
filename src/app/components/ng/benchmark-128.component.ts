
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-128',
    template: `<div class="benchmark-component">
    <h3>Component 128</h3>
    <button type="button" (click)="increment128()">
      Count {{ count128() }}
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
  export class BenchmarkNg128 {
    count128 = signal(0);

    increment128() {
      this.count128.update((count) => count + 1);
    }
  }