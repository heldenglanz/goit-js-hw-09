!function(){var e=document.querySelector("form"),n=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');e.addEventListener("submit",(function(e){e.preventDefault();for(var u=Number(n.value),c=Number(o.value),a=Number(t.value),i=0;i<a;i+=1)r(u,i+1).then((function(e){var n=e.position,o=e.delay;return console.log("✅ Fulfilled promise ".concat(n," in ").concat(o," ms"))})).catch((function(e){var n=e.position,o=e.delay;return console.log("❌ Rejected promise ".concat(n," in ").concat(o," ms"))})),u+=c}));var r=function(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:n,delay:e}):t({position:n,delay:e})}),e)}))}}();
//# sourceMappingURL=03-promises.5439ce35.js.map
