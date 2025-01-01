
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1227',
    template: `<div class="benchmark-component">
    <h3>Component 1227</h3>
    <button type="button" (click)="increment1227()">
      Count {{ count1227() }}
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
  export class BenchmarkNg1227 {
    count1227 = signal(0);

    increment1227() {
      this.count1227.update((count) => count + 1);
    }
  }