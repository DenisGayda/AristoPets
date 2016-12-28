import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import { AppUserService } from '../../shared/app.user.service';

@Component({
    selector: 'file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.css'],
    inputs:['activeColor','baseColor','overlayColor']
})
export class FileUploaderComponent implements OnInit {
    @Output() onLoad: EventEmitter<any>;
    @Input() href: string;
    @Input() type: string;
    @Input() index: any;   
    

    activeColor: string = 'green';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';
    iconColor: string;
    borderColor: string;



    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc: string = '';

    constructor(private appUserService: AppUserService) {
        this.onLoad = new EventEmitter<any>();
    }
    
    ngOnInit(){
        this.imageSrc = ''
    }

    handleDragEnter() {
        this.dragging = true;
    }
    
    handleDragLeave() {
        this.dragging = false;
    }
    
    handleDrop(event: any) {
        event.preventDefault();
        this.dragging = false;
        this.handleInputChange(event);
    }
    
    handleImageLoad() {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    }

    handleInputChange(event: any) {
        var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    
    _handleReaderLoaded(event: any) {
        let reader = event.target;
        this.imageSrc = reader.result;
        this.loaded = true;

        this.appUserService.addPhoto(reader.result, `${this.type}/` )
          .subscribe(res => this.onLoad.emit({href: res, index: this.index} ));
        this.imageSrc = ''

    }
    
    _setActive() {
        this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.activeColor;
        }
    }
    
    _setInactive() {
        this.borderColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.baseColor;
        }
    }
    
}