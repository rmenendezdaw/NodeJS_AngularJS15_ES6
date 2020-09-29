class homeSliderCtrl {
    constructor() {
        this.myInterval = 5000;
        this.noWrapSlides = false;

        this.slides = [ {image:'images/1.jpg',text:"Get funding for your code projects.",id:0},
                    {image:'https://www.kaliparmley.com/wp-content/uploads/2014/11/Video-Feature-2-1354x400.jpg',text:"Supports other projects to keep the community growing.",id:1},
                    {image:'https://k44.kn3.net/taringa/4/8/7/9/0/0/6/facundo_520/1B7.jpg?2170',text:"Other users can do the code you don't know how to do.",id:2}];
    }
}

let homeSlider = {
    controller: homeSliderCtrl,
    templateUrl: 'home/homeSlider.html'
};

export default homeSlider;