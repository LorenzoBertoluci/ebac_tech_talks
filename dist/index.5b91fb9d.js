AOS.init();const e=new Date("Dec 12, 2025 19:00:00").getTime();setInterval(function(){let t=e-new Date().getTime();document.getElementById("contador").innerHTML=` ${Math.floor(t/864e5)}d ${Math.floor(t%864e5/36e5)}h ${Math.floor(t%864e5/6e4)}m ${Math.floor(t%864e5/1e3)}s `,t<0&&(document.getElementById("contador").innerHTML="expirado")},1e3);
//# sourceMappingURL=index.5b91fb9d.js.map
