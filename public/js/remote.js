var Remote = {
    init: function(){
        Remote.listenControl();
    },
    listenControl: function(){
        $('#next').on('click', function(){
            Remote.events.next();
        });

        $('#prev').on('click', function(){
            Remote.events.prev();
        });

        $('#f').on('click', function(){
            Remote.events.fullScreen();
        });

        $('#esc').on('click', function(){
            Remote.events.esc();
        });

        $('#h').on('click', function(){
            Remote.events.h();
        });

        $('#play').on('click', function(){
            Remote.events.play();
        })
    },
    events: {
        next: function(){
            socket.emit('remoteEvent', {action:'next', code: 37});
        },
        prev: function(){
            socket.emit('remoteEvent', {action:'prev', code: 39});
        },
        fullScreen: function(){
            socket.emit('remoteEvent', {action:'fullScreen', code: 70});
        },
        esc: function(){
            socket.emit('remoteEvent', {action:'esc', code: 27});
        },
        h: function(){
            socket.emit('remoteEvent', {action:'h', code: 72});
        },
        play: function(){
            socket.emit('remoteEvent', {action:'play', code: 0});
        }
    },
    initSlides: function(socket){
        Remote.listenSlide(socket);
    },
    listenSlide: function(socket){
        socket.on('connect', function(){
        socket.on('actionEvent', function(data){
                if(data.code === 0){
                    document.querySelector('video').play()
                }else{
                    var evt = document.createEvent('Event');
                    evt.initEvent('keydown', true, true);
                    evt.keyCode = data.code;
                    document.dispatchEvent(evt);
                }
            });
        });
    }
}