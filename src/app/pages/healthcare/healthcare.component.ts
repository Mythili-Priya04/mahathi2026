import { Component,  ElementRef, ViewChild, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent implements AfterViewInit {

  // @ViewChild('videoPlayer')
  // videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
     this.initSlider();
    // const video = this.videoPlayer.nativeElement;

    // video.muted = true;           // required for autoplay
    // video.playbackRate = 0.5;     // set speed
    // video.play().catch(err => {
    //   console.error('Autoplay blocked:', err);
    // });
  }
   initSlider() {
    
      $('.slick-track-container')
                    .slick({
                        prevArrow: $('[solution-arrow-left]'),
                        nextArrow: $('[solution-arrow-right]'),
                        cssEase: 'linear',
                        // speed: 1000,
                        autoplay: false,
                        // autoplaySpeed: 5000,
                        // pauseOnHover: true,
                        swipeToSlide: true,
                        infinite: true,
                        slidesToShow: 1
                    })
                    .on('beforeChange', function () {

                    })
                if ($('.slide-indexer').length < 5) {
                    $('.test-overlay-div-desktop').eq(0).addClass('activeSlideTab');
                    $('.service-promotion-title').text('OUR SOLUTIONS');
                } else {
                    $('.service-promotion-title').text('OUR SOLUTIONS');
                }
            if ($('.slide-indexer').length < 5) {
            $('.test-overlay-div-desktop').eq(0).addClass('activeSlideTab');
            $('.service-promotion-title').text('OUR SOLUTIONS');
        } else {
            $('.service-promotion-title').text('OUR SOLUTIONS');
        }
        
        
  

  }
  clickCarousel(count:string){
         
            $('.slick-track-container').slick('slickGoTo', count);
            $('.slide-indexer').removeClass('activeSlideTab');
            $('.slide-indexer_'+count).addClass('activeSlideTab');
  }
}



