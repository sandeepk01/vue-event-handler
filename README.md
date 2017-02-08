A [Vue.js](http://vuejs.org) plugin that provides a global event bus and a couple helper methods.

Works with both `Vue 1.0` & `Vue 2.0`.

## Installation

##### 1.) Install package via NPM
```
npm install vue-event-handler
```

##### 2.) Install plugin within project.
```
import Vue from 'vue';
import VueEvents from 'vue-event-handler';

Vue.use(VueEvents)
```

or

```
window.Vue = require('vue');
require('vue-event-handler');
```

## Usage

#### The `$events` prototype object.
This plugin extends `Vue.prototype` to include a new `$events` object. The `$events` object is a simple Vue model which
includes couple aliases for the `vm.$emit` & `vm.$on` methods. An event when registered becomes globally available and thus
can be handy while passing data between components.

#### Registering an event
There are a couple of methods that can be used to register an event and attach a handler method.
Option 1 & 2 are functionally identical, and so is Option 3 & 4.
```
new Vue({

	mounted () {
		// Option 1 - Keeps listening until destroyed
        this.$events.listen('eventName', eventData => console.log(eventData));
        
        // Option 2 - Keeps listening until destroyed
        this.$events.on('eventName', eventData => console.log(eventData));
		
		// Option 3 - Listens only once and then stops responding to the trigger, but is not destroyed
        this.$events.listenOnce('eventName', eventData => console.log(eventData));
		
		// Option 4 - Listens only once and then stops responding to the trigger, but is not destroyed
        this.$events.once('eventName', eventData => console.log(eventData));
	}
})
```

#### Firing an event
There are 2 methods that fire events. Both options are functionally identical.

```
new Vue({

    data() {
        return {
            eventData: {
                foo: 'baz'
            }
        }
    },
    
    mounted() {
        // Option 1
        this.$events.fire('eventName', this.eventData);
        
        // Option 2
        this.$events.emit('eventName', this.eventData);
    }
    
})
```

#### Destroying an event
There is a method to de-register/destroy an event listener. These method becomes handy whenever the scope of a Vue component
is lost and the event was being used locally.

```
new Vue({

	beforeDestroy () {
		// Option 1 - Destroys an event
		this.$events.off('eventName');
		
		// Option 2 - Destroys an event
		this.$events.unlisten('eventName');
		
		// Option 3 - Destroys all event listeners globally
		this.$events.removeAll();
	}
})
```

## License

[MIT](http://opensource.org/licenses/MIT)
