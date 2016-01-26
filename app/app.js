import TweenMax from 'gsap';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import 'gsap-text-plugin';
export default class {
    static init(){
        var tl = new TimelineMax({repeat:2});
        tl.add(TweenMax.to("#block", 1, {x: 100}));
        tl.add(TweenMax.to("#text", 1, {text: "This is the new text"}));
        
    }
}