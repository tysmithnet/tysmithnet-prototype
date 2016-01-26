import TweenMax from 'gsap';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

export default class {
    static init(){
        var tl = new TimelineMax({repeat:2});
        tl.add(TweenMax.to("#block", 1, {x: 100}));
        
    }
}