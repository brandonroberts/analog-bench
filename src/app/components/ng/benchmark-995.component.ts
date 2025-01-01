
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-995',
    template: `<div class="benchmark-component">
    <h3>Component 995</h3>
    <button type="button" (click)="increment995()">
      Count {{ count995() }}
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
  export class BenchmarkNg995 {
    count995 = signal(0);

    increment995() {
      this.count995.update((count) => count + 1);
    }
  }