
const daily = document.querySelectorAll('.daily');
const previous = document.querySelectorAll('#previous')
const title = document.querySelectorAll('#titleName');


async function test() {
   let response = await fetch("data.json");
   let profile = await response.json();
   return profile;
}


function dailyProgress() {
   test().then((profile) => {

      for (let i = 0; i < profile.length; i++) {
         title[i].innerText = profile[i].title;
         daily[i].innerText = profile[i].timeframes['daily']['current'] + 'hrs';
         previous[i].innerText = 'Last Week - ' + profile[i].timeframes["daily"]['previous'] + 'hrs';
      }
   });
}


function weeklyProgress() {
   test().then((profile) => {

      for (let i = 0; i < profile.length; i++) {
         title[i].innerText = profile[i].title;
         daily[i].innerText = profile[i].timeframes['weekly']['current'] + 'hrs';
         previous[i].innerText = 'Last Week - ' + profile[i].timeframes["weekly"]['previous'] + 'hrs';
      }
   });
}

function monthlyProgress() {
   test().then((profile) => {

      for (let i = 0; i < profile.length; i++) {
         title[i].innerText = profile[i].title;
         daily[i].innerText = profile[i].timeframes['monthly']['current'] + 'hrs';
         previous[i].innerText = 'Last Week - ' + profile[i].timeframes["monthly"]['previous'] + 'hrs';
      }
   });
}