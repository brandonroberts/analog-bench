
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1144',
    template: `<div class="benchmark-component">
    <h3>Component 1144</h3>
    <button type="button" (click)="increment1144()">
      Count {{ count1144() }}
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
  export class BenchmarkNg1144 {
    count1144 = signal(0);

    increment1144() {
      this.count1144.update((count) => count + 1);
    }
  }