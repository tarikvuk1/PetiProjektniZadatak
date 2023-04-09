const firebaseConfig = {
    apiKey: "AIzaSyA9xDXDmc9znkPqwjytxmsdFepi9Pej6cs",
    authDomain: "si-peti-proj-zd.firebaseapp.com",
    databaseURL:"https://si-peti-proj-zd-default-rtdb.firebaseio.com",
    projectId: "si-peti-proj-zd",
    storageBucket: "si-peti-proj-zd.appspot.com",
    messagingSenderId: "537397705852",
    appId: "1:537397705852:web:036413d1d7691dfe709df9",
    measurementId: "G-EHKPC00H6G"
  };


  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  