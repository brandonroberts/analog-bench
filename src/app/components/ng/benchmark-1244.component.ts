
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1244',
    template: `<div class="benchmark-component">
    <h3>Component 1244</h3>
    <button type="button" (click)="increment1244()">
      Count {{ count1244() }}
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
  export class BenchmarkNg1244 {
    count1244 = signal(0);

    increment1244() {
      this.count1244.update((count) => count + 1);
    }
  }