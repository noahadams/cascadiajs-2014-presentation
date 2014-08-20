(function(){
    function EE() {
        this.events = {};
    }
    
    EE.prototype.on = function on(name, handler) {
        this.events[name] ?
            this.events[name].push(handler) : this.events[name] = [handler];
    };

    EE.prototype.trigger = function trigger(name) {
        var handlers = this.events[name];
        var args = Array.prototype.slice.call(arguments, 1);
        if (!handlers) {
            return;
        }
        for (var i = 0, len = handlers.length; i < len; i++) {
            handlers[i].apply(window, args);
        }
    };

    var ee = new EE();
    ee.on('foo', function(bar) {
        alert(bar);
    });

    ee.trigger('foo', 'Sure is some fancy event emitting');
    
    setTimeout(function(){
        ee.trigger('foo', 'Yup!');
    }, 3000);
}());