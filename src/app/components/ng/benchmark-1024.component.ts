
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1024',
    template: `<div class="benchmark-component">
    <h3>Component 1024</h3>
    <button type="button" (click)="increment1024()">
      Count {{ count1024() }}
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
  export class BenchmarkNg1024 {
    count1024 = signal(0);

    increment1024() {
      this.count1024.update((count) => count + 1);
    }
  }