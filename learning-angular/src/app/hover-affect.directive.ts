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


/* 
import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

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

/* import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[hover-affect]'
})

  export class HoverAffectDirective {

    constructor(private el: ElementRef) { }
  
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  
  }
     */ 

/* import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[hover-affect]'
})

  export class HoverAffectDirective {

    constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    
    this.el.nativeElement.addClass = 'hve';
  }

  @HostListener('mouseleave') onMouseLeave() {
    
    this.el.nativeElement.addClass = 'hve';
  } 

} */ 


import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[hover-affect]',
  templateUrl: 'content-list.component.html',

  export class HoverAffectDirective {

   mouseEnter(div : string){
      console.log("mouse enter : " + div);
   }

   mouseLeave(div : string){
     console.log('mouse leave :' + div);
   }
}