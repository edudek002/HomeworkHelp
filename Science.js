function myFunction() {
          var i = document.getElementById("topics").selectedIndex;
          if (i === 0) {
            document.getElementById("computerscienceall").style.display = "block";
            document.getElementById("physicsall").style.display = "block";
            document.getElementById("chemistryall").style.display = "block"; document.getElementById("geologyall").style.display = "block";
          }else if (i === 1)

          {
            document.getElementById("computerscienceall").style.display = "block";
            document.getElementById("physicsall").style.display = "none";
            document.getElementById("chemistryall").style.display = "none"; document.getElementById("geologyall").style.display = "none";



          }else if (i === 2) {
            document.getElementById("computerscienceall").style.display = "none";
            document.getElementById("physicsall").style.display = "block";
            document.getElementById("chemistryall").style.display = "none"; document.getElementById("geologyall").style.display = "none";


          }else if (i === 3) {
            document.getElementById("computerscienceall").style.display = "none";
            document.getElementById("physicsall").style.display = "none";
            document.getElementById("chemistryall").style.display = "block"; document.getElementById("geologyall").style.display = "none";
          }else if (i === 4) {
            document.getElementById("computerscienceall").style.display = "none";
            document.getElementById("physicsall").style.display = "none";
            document.getElementById("chemistryall").style.display = "none"; document.getElementById("geologyall").style.display = "block";
          }


        }