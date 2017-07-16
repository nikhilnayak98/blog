---
layout: page
title: Nikhil Nayak | 18 and Learning
---
<div class="col s12 m12 l4" id="fadeIn" style="opacity: 1;">

                <div class="card hoverable">
                    <div class="waves-effect waves-block waves-light">
                        <div class="center" style="padding-top: 20px;">
                            <img width="256px" height="256px" src="images/self_pic.jpg" class="circle responsive-img">
                        </div>
                    </div>
                    <div class="card-content center">
                        <span class="card-title activator center" style="color:rgba(0,0,0,0.7);"><strong>Nikhil Nayak</strong>
                         </span>
                        <p>Student</p>
                        <p>SOA University</p>
                        <p>Bhubaneswar, IN</p>
                    </div>
                    <div class="card-action center">
                <a target="_blank" href="https://github.com/nikhilnayak98">
                <img height="32" width="32" src="images/icons/png/github17.png"></a>
                <a target="_blank" href="mailto:nikhilnayak98@gmail.com?subject=Reply From Homepage&amp;body=Hi Nikhil,%0D">
                <img height="32" width="32" src="images/icons/png/gmail3.png"></a>
                <a target="_blank" href="https://in.linkedin.com/in/nikhilnayak98">
                <img height="32" width="32" src="images/icons/png/linkedin24.png"></a>
                <a href="tel:+918093503424">
                <img height="32" width="32" src="images/icons/png/call.png"></a>
                    </div>
                </div>
</div>
<br>

## Hello!

I m a second year undergraduate student of Computer Science And Engineering Dept. at SOA University.

Automating my existence is what I strive for. I m interested in Machine Learning and AI. This is the sole reason for most of the coding and tinkering I do. The rest is for helping out friends, and sometimes just for fun :).

In my spare time you can find me building some or the other thing on the computer. I've done a lot of interesting projects over the past years. Head over to the repos section to check out my exploits.


Subscribe via [Atom]({{ site.url }}/atom.xml) or [RSS]({{ site.url }}/rss.xml).

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
