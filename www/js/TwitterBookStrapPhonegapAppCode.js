var self = this;
var modalWin = function(position) {    
    $('#modalBody').html('Latitude: '+ position.coords.latitude + '   Longitude: '+ position.coords.longitude);
};

var modalFail = function(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

$('#locationModal').on('show',function(){
    navigator.geolocation.getCurrentPosition(self.modalWin, self.onError);   
                  
});
    
var updateContactList = function(contacts){
    theContactHtml = '';
    for(var i=0;i<contacts.length;i++){
        theContactHtml += '<li><a href="#">'+contacts[i]+'</a></li>';
    }
    $('#contactMenu').html(theContactHtml);
}
