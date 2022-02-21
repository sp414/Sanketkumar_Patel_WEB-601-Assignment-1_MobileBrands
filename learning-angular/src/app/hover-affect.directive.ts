

import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[my-affect]'
})
export class HoverAffectDirective {
  constructor(public elementRef:ElementRef) { }
  @Input('my-affect') myAffect:any;  

  ngOnInit(){
  console.log(this.myAffect)
 }
  
  @HostListener('mouseenter') onMouseEnter() {

    this.elementRef.nativeElement.classList.add(this.myAffect);
    
  
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.myAffect);
}
} 
 



