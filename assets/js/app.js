const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    // mousewheel: true,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    keyboard: {
        enabled: true
    }
});

/**
 * For Video Playback
 * When User Hovers over the video, then only video 
 * starts to play else will be paused video will be in loop
 */

const video_element = document.querySelectorAll('.swiper-slide video')
video_element.forEach(video=>{
  video.volume = 0
  video.setAttribute('loop', true)
  const parent = video.parentNode
  // if (parent.classList.contains('swiper-slide-active')){
  //   
  // }
  video.addEventListener('mouseover', ()=>{
    if (parent.classList.contains('swiper-slide-active')){
      
      if (video.paused){
        parent.querySelector('.play-button').style.display = 'none'
        video.play()
      }
    }
  })
  
  video.addEventListener('mouseleave', ()=>{
    const parent = video.parentNode
    if (parent.classList.contains('swiper-slide-active')){
      if (!video.paused){
        video.pause()
        parent.querySelector('.play-button').style.display = 'flex'
      }
    }
  })
})

/***
 * Checking if Playback is stopped so that multiple video doest plays atonce
 */
const check_video_playback = ()=>{
  const main_slider = document.querySelectorAll('.swiper-slide')
  main_slider.forEach(slider_i =>{
    const video_item = slider_i.querySelector("video")
    if (slider_i.contains(video_item)){
      if (!slider_i.classList.contains('swiper-slide-active')){
        console.log(slider_i.querySelector(".play-button"));
        slider_i.querySelector('.play-button').style.display = 'none'
        video_item.pause()
      }
      else{
        if(video_item.paused){
          slider_i.querySelector('.play-button').style.display = 'flex'
        }
      }
    }
  })

  setTimeout(check_video_playback, 1)
}
check_video_playback()