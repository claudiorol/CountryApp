import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = "";
  @Input() searchTerm: string = "";

  private debouncer = new Subject<string>();
  @Output() onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(1500)).subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  onKeyPress(value: string) {
    this.debouncer.next(value);
  }
  
  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }
}
