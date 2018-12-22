---
layout: page
title: Nikhil Nayak
---

<div class="col s12 m12 l4" id="fadeIn" style="opacity: 1;">

                <div class="card hoverable">
                    <div class="card-content center">
                        <span class="card-title activator center" style="color:rgba(0,0,0,0.7);"><strong>Nikhil Nayak</strong>
                         </span>
                        <p>Bhubaneswar, IN</p>
                    </div>
                    <div class="card-action center">
                <a target="_blank" href="https://github.com/nikhilnayak98">
                <img height="32" width="32" src="images/icons/png/github17.png"></a>
                <a target="_blank" href="mailto:&#110;&#105;&#107;&#104;&#105;&#108;&#110;&#097;&#121;&#097;&#107;&#057;&#056;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;?subject=Reply From Homepage&amp;body=Hi Nikhil,%0D">
                <img height="32" width="32" src="images/icons/png/gmail3.png"></a>
                <a target="_blank" href="https://in.linkedin.com/in/nikhilnayak98">
                <img height="32" width="32" src="images/icons/png/linkedin24.png"></a>
                    </div>
                </div>
</div>
<br>

## Hello!

I m a third year undergrad student of Computer Science And Engineering Dept. at SOA University.


Dreamer and a fanatic of all digital things. I ❤ experimenting with code and reading about space exploration. Pssst, I also do VFX and motion graphics 😜. I believe that a well-delivered technology renders a new culture. Often in the beginning, the new culture is thought of as an alternative, but soon it transforms into the lived culture that many people share through interaction. Thinking about how technology could influence the way we live is something which excites me. While I am proficient in building scalable backend services and in Android Development, my major interests are High Performance Computing & AI (It's an exciting time for AI isn't it?). Life cant just be about solving one miserable problem after another. There have to be reasons that inspire you, that make you wake up in the morning and look forward to be part of humanity and the future.

I'm a massive cyberpunk nerd with an interest in open source. In my free time I like to hack on fun projects, play / watch cricket with friends, gulp chocolate smoothies and take pictures.

<script>
if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
          .then(function(registration) {
                console.log('Service Worker Registered');
          });

        navigator.serviceWorker.ready.then(function(registration) {
           console.log('Service Worker Ready');
           alertShow();
        });
      }
      function alertShow(){
       var alerted = localStorage.getItem('alerted') || '';
        if (alerted != 'yes') {
         var $toastContent = $('<span style="font-size:18px;font-style: normal;">Caching Complete <img src="/images/icons/svgs/check.svg"/></span>');
         Materialize.toast($toastContent, 4000, '', function(){var $toastContents = $('<span style="font-size:18px;font-style: normal;">Future Visits Will Work Offline.</span>');Materialize.toast($toastContents, 4000);});
         localStorage.setItem('alerted','yes');
        }
      }
</script>
