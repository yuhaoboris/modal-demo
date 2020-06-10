var utils = (function () {
  function Modal(type) {
    var _modalOptions = {
      title: '',
      titleClass: '',
      content: '',
      contentLoaded: function () {},
      theme: 'default',
      animation: 'none',
      useBootstrap: false,
      confirmButtonText: '',
      cancelButtonText: '',
      closeIcon: '',
      onOpenBefore: function () {},
      onOpen: function () {},
      onClose: function () {},
      onAction: function (action) {}
    }

    this.modal = {
      alert: function (options) {
        var opt = Object.assign(_modalOptions, options)
        var alertOptions = Object.assign({
          boxWidth: '80%',
          buttons: {
            confirm: {
              text: opt.confirmButtonText || '好的',
              btnClass: 'jconfirm-btn__confirm'
            }
          }
        }, opt)

        return $.alert(alertOptions)
      },
      confirm: function (options) {
        var opt = Object.assign(_modalOptions, options)
        var confirmOptions = Object.assign({
          boxWidth: '80%',
          buttons: {
            cancel: {
              text: opt.cancelButtonText || '取消',
              btnClass: 'jconfirm-btn__cancel'
            },
            confirm: {
              text: opt.confirmButtonText || '确认',
              btnClass: 'jconfirm-btn__confirm'
            }
          }
        }, opt)

        return $.confirm(confirmOptions)
      },
      dialog: function (options) {
        var opt = Object.assign(_modalOptions, options)
        var dialogOptions = Object.assign({ boxWidth: '80%' }, opt)

        return $.dialog(dialogOptions)
      },
      loading: function (options) {
        var opt = Object.assign(_modalOptions, options)
        var dialogOptions = Object.assign({ closeIcon: 0 }, opt)

        return $.dialog(dialogOptions)
      }
    }

    return this.modal[type]
  }

  var exports = {}

  exports.alert = function (options) {
    return new Modal('alert')(options)
  }
  exports.confirm = function (options) {
    return new Modal('confirm')(options)
  }
  exports.dialog = function (options) {
    return new Modal('dialog')(options)
  }
  exports.loading = function (options) {
    return new Modal('loading')(options)
  }

  return exports
})()
