var song = "music/asake.mp3"
var musicTOplay = new Audio (song)

var mind = "music/i will be fine.mp3"
var good = new Audio (mind)

var bella = "music/bella.mp3"
var bellad = new Audio (bella)

var holy = "music/holy.mp3"
var omah = new Audio (holy)

var fire = "music/fireboy1.mp3"
var boy = new Audio (fire)










function me() {
     if( put.value >=0 && put.value <40)
     {
        console.log("F");
        last.innerHTML = "F"
        musicTOplay.play()
        
     }
     else if (put.value >=40 && put.value <45){
         console.log("E");
         last.innerHTML = "E"
         good.play()
    }


      else if (put.value >=45 && put.value <50){
         console.log("D");
         last.innerHTML = "D"
         bellad.play()
      }


      else if (put.value >=50 && put.value <60){
        console.log("C");
        last.innerHTML = "C"
        omah.play()
     }


     else if (put.value >=60 && put.value <70){
        console.log("B");
        last.innerHTML = "B"
        boy.play()

     }

     else if (put.value >=70 && put.value <=100){
        console.log("A");
        last.innerHTML = "A"
        boy.play()
     }




     else{
        console.log("you dey over do");
        last.innerHTML = "Error"
     }
}