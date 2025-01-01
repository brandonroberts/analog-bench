
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-718',
    template: `<div class="benchmark-component">
    <h3>Component 718</h3>
    <button type="button" (click)="increment718()">
      Count {{ count718() }}
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
  export class BenchmarkNg718 {
    count718 = signal(0);

    increment718() {
      this.count718.update((count) => count + 1);
    }
  }