(()=>{const e=document.querySelector("[data-menu-button]"),s=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-close]");e.addEventListener("click",(()=>{e.classList.toggle("is-open")})),e.addEventListener("click",(()=>{s.classList.toggle("is-open")})),t.addEventListener("click",(()=>{e.classList.toggle("is-open")})),t.addEventListener("click",(()=>{s.classList.toggle("is-open")}))})(),$(".rate").rateYo({starWidth:"24px",normalFill:"#d6d6d6",ratedFill:"#ffcc00",readOnly:!0}),$(".slider").slick({slidesToShow:3,slidesToScroll:1,infinite:!0,arrows:!0,centerPadding:"20px",centerMode:!0,useTransform:!0,cssEase:"linear",autoplaySpeed:1e3,lazyLoad:"ondemand",responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});const e=document.querySelector(".slider"),s=e.querySelector(".slick-prev"),t=e.querySelector(".slick-next"),l=document.querySelector(".reviews__show-slide");console.log(s,t,l),s.addEventListener("click",(()=>{let e=$(".slider").slick("slickCurrentSlide");l.textContent=e+1})),t.addEventListener("click",(()=>{let e=$(".slider").slick("slickCurrentSlide");l.textContent=e+1}));
//# sourceMappingURL=index.1a208f95.js.map
