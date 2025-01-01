
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-16',
    template: `<div class="benchmark-component">
    <h3>Component 16</h3>
    <button type="button" (click)="increment16()">
      Count {{ count16() }}
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
  export class BenchmarkNg16 {
    count16 = signal(0);

    increment16() {
      this.count16.update((count) => count + 1);
    }
  }