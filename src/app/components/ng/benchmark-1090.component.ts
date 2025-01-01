
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1090',
    template: `<div class="benchmark-component">
    <h3>Component 1090</h3>
    <button type="button" (click)="increment1090()">
      Count {{ count1090() }}
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
  export class BenchmarkNg1090 {
    count1090 = signal(0);

    increment1090() {
      this.count1090.update((count) => count + 1);
    }
  }