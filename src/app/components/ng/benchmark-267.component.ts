
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-267',
    template: `<div class="benchmark-component">
    <h3>Component 267</h3>
    <button type="button" (click)="increment267()">
      Count {{ count267() }}
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
  export class BenchmarkNg267 {
    count267 = signal(0);

    increment267() {
      this.count267.update((count) => count + 1);
    }
  }