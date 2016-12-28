import { Component, Output, Input, EventEmitter } from '@angular/core';
import { advertItem } from '../../../../shared/app.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'adverts-item',
  templateUrl: 'advert-items.component.html',
  styleUrls: ['advert-items.component.css']
})
export class AdvertItemsComponent {
  @Output() private onLoad: EventEmitter<any>;
  @Input() private item: advertItem;
  @Input() private index: any;
  private complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.onLoad = new EventEmitter<any>();
    this.complexForm = fb.group({
      gender: '',
      state: '',
      price: 0,
      color: ''
    });
    this.item = {
      gender: '',
      state: '',
      price: 0,
      color: '',
      photos: []
    };
  }

  private setSrc(event: any) {
    this.item.photos.push(event.href);
  }

  private toggle(value: any): boolean {
    const item = {
      gender: value.gender ? value.gender : this.item.gender,
      state: value.state ? value.state : this.item.state,
      price: value.price ? value.price : this.item.price,
      color: value.color ? value.color : this.item.color,
      photos: this.item.photos.length ? this.item.photos : []
    };
    this.onLoad.emit({index: this.index, item: item});
    this.complexForm.reset();
    this.item.photos = [];
    return false;
  }
}