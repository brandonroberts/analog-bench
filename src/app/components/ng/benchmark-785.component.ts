
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-785',
    template: `<div class="benchmark-component">
    <h3>Component 785</h3>
    <button type="button" (click)="increment785()">
      Count {{ count785() }}
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
  export class BenchmarkNg785 {
    count785 = signal(0);

    increment785() {
      this.count785.update((count) => count + 1);
    }
  }