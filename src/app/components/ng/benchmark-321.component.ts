
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-321',
    template: `<div class="benchmark-component">
    <h3>Component 321</h3>
    <button type="button" (click)="increment321()">
      Count {{ count321() }}
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
  export class BenchmarkNg321 {
    count321 = signal(0);

    increment321() {
      this.count321.update((count) => count + 1);
    }
  }