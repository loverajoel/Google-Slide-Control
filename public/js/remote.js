var Remote = {
    init: function(){
        Remote.listeners();
    },
    listeners: function(){
        $('#next').on('click', function(){
            Remote.events.next();
        });

        $('#prev').on('click', function(){
            Remote.events.prev();
        });
    },
    events: {
        next: function(){
            socket.emit('remoteEvent', {action:'next'});
        },
        prev: function(){
            socket.emit('remoteEvent', {action:'prev'});
        }
    }
}