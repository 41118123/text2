function adjustText() {
    var studentId = document.getElementById('student-id');
    var studentName = document.getElementById('student-name');
  
    studentId.style.fontSize = '20px';
    studentName.style.fontSize = '20px';
  
    studentId.style.color = 'blue';
    studentName.style.color = 'yellow';
  }
  
  function adjustProfile() {
    var profilePic = document.getElementById('profile-pic');
  
    profilePic.style.borderRadius = '50%';
    profilePic.style.borderWidth = '4px';
    profilePic.style.borderColor = 'red';
  }
  
  function changeProfile() {
    var profilePic = document.getElementById('profile-pic');
    profilePic.src = 'life-photo.jpg';
  }