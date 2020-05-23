import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectorService } from "../../core/platform-detector/platform-detector.service";

@Directive({
    selector: '[immedieteClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>, 
        private platFormDetector: PlatformDetectorService) {}
        
        ngOnInit(): void {
            this.platFormDetector.isPlatformBrowser &&
            this.element.nativeElement.click();
        }
}