
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1251',
    template: `<div class="benchmark-component">
    <h3>Component 1251</h3>
    <button type="button" (click)="increment1251()">
      Count {{ count1251() }}
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
  export class BenchmarkNg1251 {
    count1251 = signal(0);

    increment1251() {
      this.count1251.update((count) => count + 1);
    }
  }