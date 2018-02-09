
/*
  An object representing a remote, Wi-Fi controle IoT light.
  Features include:
     Ability to control RGB color.
     Ability to enable/disable Auto-Off feature
     Ability to configure time used for Auto-Off feature
*/
var light = {
    // state variables for simulated lamp
    r: 0,
    g: 100,
    b: 0,
    powered: false,
    autoOffEnabled: true,
    autoOffTime: 2,

    autoOffTimer: null,

    // Variable used to track listener function
    stateChangeListener: null,

    // ****** Simple setter functions *******
    setPowered: function(power) {
      this.powered = power
      if(this.powered && this.autoOffEnabled) {
        this.startAutoOffTimer()
      }
      // TODO 3: When *any* significant aspect of state changes, any "listener" will need to be notified.
      // TODO 4: Test your work.
    },

    setColor: function(color) {
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
    },

    setAutoOffEnabled: function(enabled) {
      this.autoOffEnabled = enabled
      // If the Auto-off timer was running, turn it off.
      if(this.autoOffEnabled == false) {
        this.clearAutoOffTimer()
      } else {
        this.startAutoOffTimer()
      }
    },

    setAutoOffTime: function(time) {
      this.autoOffTime = time
      this.startAutoOffTimer()
    },



    clearAutoOffTimer: function() {
        if(this.autoOffTimer) {
          clearTimeout(this.autoOffTimer)
          this.autoOffTimer = null
        }
    },
    startAutoOffTimer: function () {
      if(this.autoOffTimer) {
        clearTimeout(this.autoOffTimer)
      }
      var callingObject = this
      // This one is done for you!
      this.autoOffTimer = setTimeout(function() {  callingObject.powered = false; callingObject.stateChange() }, 1000)
    },

    setStateChangeListener: function(aListener) {
      // TODO 3:
      this.stateChangeListener = aListener;
    },

    // TODO 1: Read this:
    // stateChange is a utility function (helper function).
    // Consolidate all your code to update listeners here and then just call it.
    stateChange: function() {
      // TODO 2: Complete this function.

      // Whenever this is called it should pass the current state to the callback function after 1s

      var callingObject = this
      // TODO: Explain why the line below is needed:
      if(callingObject.stateChangeListener) {
        // This will create a JSON style object.
        var state = { r:this.r,
                      g:this.g,
                      b:this.b,
                      powered:this.powered,
                      autoOffEnabled:this.autoOffEnabled,
                      autoOffTime:this.autoOffTime};
        // TODO: Code here....
      }
    }
}
