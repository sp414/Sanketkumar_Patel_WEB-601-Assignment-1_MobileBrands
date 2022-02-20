/* import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[hover-affect]'
})
export class HoverAffectDirective {
  constructor(public elementRef:ElementRef) { }
  @Input('hover-affect') hoverAffect:any;  
//   ngOnInit(){
//     console.log(this.hoverAffect)
//  }
  
  @HostListener('mouseenter') onMouseEnter() {

    this.elementRef.nativeElement.classList.add(this.hoverAffect);
    
  
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverAffect);
}
} 
 */



import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[hover-affect]'
})
export class HoverAffectDirective {
  constructor(public elementRef:ElementRef) { }
  @Input('hover-affect') hoverAffect:any;  

  ngOnInit(){
  console.log(this.hoverAffect)
 }
  
  @HostListener('mouseenter') onMouseEnter() {

    this.elementRef.nativeElement.classList.add(this.hoverAffect);
    
  
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverAffect);
}
} 
 



