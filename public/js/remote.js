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
        },
        fullScreen: function(){
            socket.emit('remoteEvent', {action:'fullScreen'});
        },
        esc: function(){
            socket.emit('remoteEvent', {action:'esc'});
        },
        h: function(){
            socket.emit('remoteEvent', {action:'h'});
        }
    }
}