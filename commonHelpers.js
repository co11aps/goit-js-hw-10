import{s as l}from"./assets/stop-icon-97194e6f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";console.log("Timer");const n=document.querySelector("button[data-start]"),a=document.querySelector("input#datetime-picker"),S=document.querySelector(".value[data-days]"),h=document.querySelector(".value[data-hours]"),p=document.querySelector(".value[data-minutes]"),y=document.querySelector(".value[data-seconds]");let s;n.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?(n.disabled=!0,f.show({message:"Please choose a date in the future",messageColor:"#fff",color:"red",backgroundColor:"#EF4040",messageSize:"16",position:"topCenter",iconUrl:l})):(n.disabled=!1,s=t[0])}};m(a,C);function g(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:i,seconds:d}}function v(){const t=setInterval(()=>{const e=s-Date.now(),o=g(e);e<1e3&&clearInterval(t),b(o)},1e3)}function b(t){const e=k(t);S.textContent=e.days,h.textContent=e.hours,p.textContent=e.minutes,y.textContent=e.seconds}function k({days:t,hours:e,minutes:o,seconds:r}){return t=t.toString().padStart(2,"0"),e=e.toString().padStart(2,"0"),o=o.toString().padStart(2,"0"),r=r.toString().padStart(2,"0"),{days:t,hours:e,minutes:o,seconds:r}}n.addEventListener("click",()=>{v(),n.disabled=!0,a.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map