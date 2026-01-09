import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  
  ngAfterViewInit(): void {
    this.setupVideo();
    setTimeout(() => {
      this.initSlider();
    }, 250);
  }
  ngOnDestroy(): void {
    const slider = $('.slick-track-container');
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick'); 
    }
  }

  setupVideo() {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      const video = this.videoPlayer.nativeElement;
      video.muted = true;    
      video.playbackRate = 0.5; 
      
      video.play().catch(err => {
        console.warn("Autoplay failed:", err);
      });
    }
  }

initSlider() {
    const solutionsSlider = $('.slick-track-container');
    const bannerSlider = $('.banner-carousel-item-inner');
    if (solutionsSlider.hasClass('slick-initialized')) {
        solutionsSlider.slick('unslick');
    }
    if (bannerSlider.hasClass('slick-initialized')) {
        bannerSlider.slick('unslick');
    }
    solutionsSlider.slick({
        prevArrow: $('[solution-arrow-left]'),
        nextArrow: $('[solution-arrow-right]'),
        cssEase: 'linear',
        autoplay: false,
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: false
    });
    bannerSlider.slick({
        prevArrow: $('[solution-arrow-left]'),
        nextArrow: $('[solution-arrow-right]'),
        cssEase: 'linear',
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4590, 
        infinite: true,
        slidesToShow: 1,
        variableWidth: false,
        adaptiveHeight: false,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    bannerSlider.on('beforeChange', (event: any, slick: any, currentSlide: number, nextSlide: number) => {
        let nextDuration: number;
        switch (nextSlide) {
            case 0: nextDuration = 4590; break;
            case 1: nextDuration = 6830; break;
            case 2: nextDuration = 3600; break;
            default: nextDuration = 4000;
        }
        bannerSlider.slick('slickSetOption', 'autoplaySpeed', nextDuration);
    });
    $('.slide-indexer').removeClass('activeSlideTab');
    $('.test-overlay-div-desktop').eq(0).addClass('activeSlideTab');
    $('.service-promotion-title').text('OUR SOLUTIONS');


    $('#page-block-banner-carousel').show().css({
        'visibility': 'visible',
        'opacity': '1',
        'display': 'block'
    });
}

  clickCarousel(count: string) {
    const slider = $('.slick-track-container');
    if (slider.hasClass('slick-initialized')) {
      slider.slick('slickGoTo', count);
      $('.slide-indexer').removeClass('activeSlideTab');
      $('.slide-indexer_' + count).addClass('activeSlideTab');
    }
  }
  
}