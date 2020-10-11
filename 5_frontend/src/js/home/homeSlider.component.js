class homeSliderCtrl {
    constructor() {
        this.myInterval = 5000;
        this.noWrapSlides = false;

        this.slides = [ {image:'images/1.jpg',text:"Get funding for your code projects.",id:0},
                    {image:'images/2.jpg',text:"Supports other projects to keep the community growing.",id:1},
                    {image:'images/3.jpg',text:"Other users can do the code you don't know how to do.",id:2}];
    }
}

let homeSlider = {
    controller: homeSliderCtrl,
    templateUrl: 'home/homeSlider.html'
};

export default homeSlider;