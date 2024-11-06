sheep.addEventListener('click',function(){
    console.log("sheep");
    document.getElementById('gallery').src="sheep.webp";

    bear.style.backgroundColor = '#d9043d';
    moose.style.backgroundColor = '#d9043d';
    wolf.style.backgroundColor = '#d9043d';
    elk.style.backgroundColor = '#d9043d';

    sheep.style.backgroundColor = '#97bf04';
})

bear.addEventListener('click',function(){
    console.log("bear");
    document.getElementById('gallery').src="bear.webp";
   // document.getElementById(`sheep`).style.backgroundColor='#97bf04';
    sheep.style.backgroundColor = '#d9043d';
    moose.style.backgroundColor = '#d9043d';
    wolf.style.backgroundColor = '#d9043d';
    elk.style.backgroundColor = '#d9043d';

    bear.style.backgroundColor = '#97bf04';
})

moose.addEventListener('click',function(){
    console.log("moose");
    document.getElementById('gallery').src="moose.webp";
   // document.getElementById(`sheep`).style.backgroundColor='#97bf04';

   bear.style.backgroundColor = '#d9043d';
   wolf.style.backgroundColor = '#d9043d';
   elk.style.backgroundColor = '#d9043d';
   sheep.style.backgroundColor = '#d9043d';

    moose.style.backgroundColor = '#97bf04';
})

wolf.addEventListener('click',function(){
    console.log("wolf");
    document.getElementById('gallery').src="wolf.webp";
   // document.getElementById(`sheep`).style.backgroundColor='#97bf04';

   bear.style.backgroundColor = '#d9043d';
   elk.style.backgroundColor = '#d9043d';
   sheep.style.backgroundColor = '#d9043d';
    moose.style.backgroundColor = '#d9043d';

    wolf.style.backgroundColor = '#97bf04';
})

elk.addEventListener('click',function(){
    console.log("elk");
    document.getElementById('gallery').src="elk.webp";


   bear.style.backgroundColor = '#d9043d';
   wolf.style.backgroundColor = '#d9043d';
   sheep.style.backgroundColor = '#d9043d';
    moose.style.backgroundColor = '#d9043d';

    elk.style.backgroundColor = '#97bf04';
    //document.getElementById(`sheep`).style.backgroundColor='#97bf04';
})
