
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-250',
    template: `<div class="benchmark-component">
    <h3>Component 250</h3>
    <button type="button" (click)="increment250()">
      Count {{ count250() }}
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
  export class BenchmarkNg250 {
    count250 = signal(0);

    increment250() {
      this.count250.update((count) => count + 1);
    }
  }