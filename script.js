

var firebaseConfig = {
    apiKey: "AIzaSyABSm18a72OZsCnMZJKvf32RdZ1s96JmSQ",
    authDomain: "share-link-cc3f2.firebaseapp.com",
    projectId: "share-link-cc3f2",
    storageBucket: "share-link-cc3f2.appspot.com",
    messagingSenderId: "288737851905",
    appId: "1:288737851905:web:97d9d1f3e958d6973f5e00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();
  let link = document.getElementById('link')
  let save = document.getElementById('save')
  let div = document.getElementById('p')
  let num = 0
  let num2=0
  let num3=0
  let p2 = ''


  database.ref().child('num').on('value' , function(snapshot){
console.log(snapshot.val())
 num = snapshot.val();
 num2 = snapshot.val();
 num3 = snapshot.val();
 
 while(num2>0){
    database.ref().child(num2).child('task').on('value' , function(snapshot2){
      let p = document.createElement('p')
      p2 = p
        if(snapshot.val()!=0){
        p.innerText = snapshot2.val()
        console.log(snapshot2.val() )
        div.appendChild(p)
        }  
    })
    num2--
      }
    
 })

  save.addEventListener('click' , function(){
      if(num!=0){
        num++
      }
      
     

      if(link.value.length!=0||num==0){
        
       
          database.ref().child(num).child('task').set(link.value)
          database.ref().child('num').set(num)
          window.location.reload();
      }
  })
