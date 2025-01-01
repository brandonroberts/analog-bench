
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-191',
    template: `<div class="benchmark-component">
    <h3>Component 191</h3>
    <button type="button" (click)="increment191()">
      Count {{ count191() }}
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
  export class BenchmarkNg191 {
    count191 = signal(0);

    increment191() {
      this.count191.update((count) => count + 1);
    }
  }