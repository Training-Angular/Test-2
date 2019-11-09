function toggle() {
  var navRes = document.getElementById('nav-responsive');
  var sidebarRes = document.getElementById('sidebar-responsive');
  if (navRes.className === 'nav' && sidebarRes.className === 'sidebar') {
    navRes.className += ' responsive';
    sidebarRes.className += ' responsive';
  } else {
    navRes.className = 'nav';
    sidebarRes.className = 'sidebar';
  }
}

var iconToggle = document.getElementById('icon-toggle');
iconToggle.onclick = toggle;

// Show detail message

function showDetailMessage() {
  var widthScreen = screen.width;
  var chatRightbar = document.getElementById('chat-rightbar');
  var chatLeftbar = document.getElementById('chat-leftbar');
  if (widthScreen <= 768) {
    chatRightbar.style.display = 'flex';
    chatLeftbar.style.display = 'none';
  }
}

var chatTabs = document.querySelectorAll('.chat-tab');
chatTabs.forEach(chatTab => {
  chatTab.onclick = showDetailMessage;
});

function backListChats() {
  var chatRightbar = document.getElementById('chat-rightbar');
  var chatLeftbar = document.getElementById('chat-leftbar');

  chatRightbar.style.display = 'none';
  chatLeftbar.style.display = 'flex';
}

var btnBack = document.getElementById('btn-back');
btnBack.onclick = backListChats;
