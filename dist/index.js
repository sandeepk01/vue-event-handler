'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    var events = new Vue({
        methods: {
            fire: function fire(name) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                this.emit(name, data);
            },
            emit: function emit(name) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                this.$emit(name, data);
            },
            listen: function listen(name, cb) {
                this.on(name, cb);
            },
            on: function on(name, cb) {
                this.$on(name, cb);
            },
            off: function off(name, cb) {
                this.$off(name, cb);
            },
            unlisten: function unlisten(name, cb) {
                this.off(name, cb);
            }
        }
    });

    Object.defineProperty(Vue.prototype, '$events', {
        get: function get() {
            return events;
        }
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

exports.default = plugin;