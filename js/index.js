$(function() {
  // 提示 Alert
  $('#btn-alert').on('click', function () {
    utils.alert({
      title: '提示',
      content: '代码是写出来给人看的，附带能在机器上运行。',
      onOpenBefore: function () {
        console.log('[提示 Alert] Modal 打开前')
      },
      onOpen: function () {
        console.log('[提示 Alert] Modal 打开')
      },
      onClose: function () {
        console.log('[提示 Alert] Modal 关闭')
      },
      onAction: function (action) {
        console.log(`[提示 Alert] Modal 触发 ${action} 动作`)
      }
    })
  })

  // 提示 Alert（无标题）
  $('#btn-alert2').on('click', function () {
    utils.alert({
      content: '代码是写出来给人看的，附带能在机器上运行。',
      onOpenBefore: function () {
        console.log('[提示 Alert（无标题）] Modal 打开前')
      },
      onOpen: function () {
        console.log('[提示 Alert（无标题）] Modal 打开')
      },
      onClose: function () {
        console.log('[提示 Alert（无标题）] Modal 关闭')
      },
      onAction: function (action) {
        console.log(`[提示 Alert（无标题）] Modal 触发 ${action} 动作`)
      }
    })
  })

  // 确认 Confirm
  $('#btn-confirm').on('click', function () {
    utils.confirm({
      title: '注意',
      content: '代码是写出来给人看的，附带能在机器上运行，你同意吗？',
      onOpenBefore: function () {
        console.log('[确认 Confirm] Modal 打开前')
      },
      onOpen: function () {
        console.log('[确认 Confirm] Modal 打开')
      },
      onClose: function () {
        console.log('[确认 Confirm] Modal 关闭')
      },
      onAction: function (action) {
        console.log(`[确认 Confirm] Modal 触发 ${action} 动作`)
      }
    })
  })

  // 确认 Confirm（无标题）
  $('#btn-confirm2').on('click', function () {
    utils.confirm({
      content: '代码是写出来给人看的，附带能在机器上运行，你同意吗？',
      onOpenBefore: function () {
        console.log('[确认 Confirm] Modal 打开前')
      },
      onOpen: function () {
        console.log('[确认 Confirm] Modal 打开')
      },
      onClose: function () {
        console.log('[确认 Confirm] Modal 关闭')
      },
      onAction: function (action) {
        console.log(`[确认 Confirm] Modal 触发 ${action} 动作`)
      }
    })
  })

  // 复合内容
  $('#btn-form').on('click', function () {
    utils.confirm({
      content: $('#tpl-form').html(),
      onOpenBefore: function () {
        console.log('[复合内容] Modal 打开前')
      },
      onOpen: function () {
        console.log('[复合内容] Modal 打开')
      },
      onClose: function () {
        console.log('[复合内容] Modal 关闭')
      },
      onAction: function (action) {
        console.log(`[复合内容] Modal 触发 ${action} 动作`)
      }
    })
  })

  // 展示图片
  $('#btn-image').on('click', function () {
    utils.dialog({
      content: '<img src="http://correctimage2.hucai.com/img/Template/baobao_book/uploadPopup/1.png"><img src="http://correctimage2.hucai.com/img/Template/baobao_book/uploadPopup/btn-1.png">',
      onOpenBefore: function () {
        console.log('[展示图片] Modal 打开前')
      },
      onOpen: function () {
        console.log('[展示图片] Modal 打开')
      },
      onClose: function () {
        console.log('[展示图片] Modal 关闭')
      },
      onAction: function (action) {
        console.log(`[展示图片] Modal 触发 ${action} 动作`)
      }
    })
  })

  // 加载中
  $('#btn-loading').on('click', function () {
    var $loading = utils.loading({
      content: $('#tpl-loading').html(),
      onOpenBefore: function () {
        console.log('[展示图片] Modal 打开前')
      },
      onOpen: function () {
        console.log('[展示图片] Modal 打开')
      }
    })

    setTimeout(function () {
      $loading.close()
    }, 3000)
  })

  // 等待数据加载
  $('#btn-wait').on('click', function () {
    utils.alert({
      title: '提示',
      content: '等待数据加载完成！'
    })
  })

  // 模版制作提示
  $('#btn-tpl-design').on('click', function () {
    utils.confirm({
      title: '提示',
      content: '选定模版将不能更换，是否继续制作？',
      onAction: function (action) {
        if (action === 'confirm') {
          console.log('继续制作')
        }
        if (action === 'cancel') {
          console.log('取消制作')
        }
      }
    })
  })

  // 图片上传数量提示
  $('#btn-upload').on('click', function () {
    utils.confirm({
      title: '提示',
      content: $('#tpl-upload').html(),
      confirmButtonText: '继续',
      onAction: function (action) {
        if (action === 'confirm') {
          console.log('继续上传图片')
        }
        if (action === 'cancel') {
          console.log('取消上传图片')
        }
      }
    })
  })

  // 自动套版提示
  $('#btn-taoban').on('click', function () {
    utils.confirm({
      title: '开始制作',
      content: '您是否需要系统自动套版？',
      confirmButtonText: '需要',
      cancelButtonText: '不需要',
      onAction: function (action) {
        if (action === 'confirm') {
          console.log('系统自动套版')
        }
        if (action === 'cancel') {
          console.log('用户手动制作')
        }
      }
    })
  })

  // 作品保存提示
  $('#btn-save').on('click', function () {
    utils.confirm({
      title: '保存提示',
      content: $('#tpl-form').html(),
      confirmButtonText: '确定',
      onAction: function (action) {
        if (action === 'confirm') {
          console.log('保存成功')
        }
        if (action === 'cancel') {
          console.log('取消保存')
        }
      }
    })
  })

  // 宝宝脸书传图引导
  var facebookGuideIndex = 0
  $('#btn-guide').on('click', function () {
    var $guideModal = utils.dialog({
      content: $('#tpl-guide').html(),
      onOpenBefore: function () {
        var $facebookGuide = $('#facebook-guide')

        function showFacebookGuide (index) {
          $facebookGuide.children().each(function () {
            if ($(this).data('index') === index) {
              $(this).show()
            } else {
              $(this).hide()
            }
          })
        }

        $facebookGuide.on('click', '.next-step', function () {
          if (facebookGuideIndex < 2) {
            facebookGuideIndex += 1
            showFacebookGuide(facebookGuideIndex)
          } else {
            $guideModal.close()
            setTimeout(function () {
              facebookGuideIndex = 0
              showFacebookGuide(facebookGuideIndex)
            }, 100)
          }
        })

        showFacebookGuide(facebookGuideIndex)
      }
    })
  })

  // AI 抠图确认
  $('#btn-ai').on('click', function () {
    var $modal = utils.dialog({
      content: $('#tpl-ai').html(),
      onOpen: function () {
        $('#reupload').on('click', function () {
          console.log('重新传图')
          $modal.close()
        })

        $('#useimg').on('click', function () {
          console.log('确认使用')
          $modal.close()
        })
      }
    })
  })
})
