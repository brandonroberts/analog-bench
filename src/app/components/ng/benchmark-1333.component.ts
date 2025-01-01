
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1333',
    template: `<div class="benchmark-component">
    <h3>Component 1333</h3>
    <button type="button" (click)="increment1333()">
      Count {{ count1333() }}
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
  export class BenchmarkNg1333 {
    count1333 = signal(0);

    increment1333() {
      this.count1333.update((count) => count + 1);
    }
  }