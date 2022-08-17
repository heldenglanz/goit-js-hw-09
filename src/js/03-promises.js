
const formEl = document.querySelector("form");
const delayEl = document.querySelector('[name="delay"]')
const stepEl = document.querySelector('[name="step"]')
const amountEl = document.querySelector('[name="amount"]')

formEl.addEventListener('submit', createPromise)

const getPromiseData = (delay, position) =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else
        reject({position, delay});
    }, delay);
});
}

function createPromise(e) {
  e.preventDefault();
  let delay = Number(delayEl.value);
let step = Number(stepEl.value);
let amount = Number(amountEl.value);

for (let i=0; i < amount; i+=1){
  getPromiseData(delay, i+1)
.then(({position, delay}) =>
console.log(`✅ Fulfilled promise ${position} in ${delay} ms`)
)
.catch(({position, delay})=> 
  console.log(`❌ Rejected promise ${position} in ${delay} ms`)
)
delay +=step;
} 
};
