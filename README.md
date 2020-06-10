## 弹层类型

DIY 项目移动端常用到的弹层效果，按类型大致可分为三种：
- 信息提示型 Alert
- 确认操作型 Confirm
- 复合操作型 Dialog

例子截图如下所示

### 信息提示型 Alert
![](/images/alert_01.png) ![](/images/alert_02.png)

### 确认操作型 Confirm
![](/images/confirm_01.png) ![](/images/confirm_02.png)

### 复合操作型 Dialog
![](/images/dialog_01.png) ![](/images/dialog_02.png)

## 统一弹层解决方案

基于第三方插件 [jquery-confirm](https://github.com/craftpip/jquery-confirm) 上，进行适合自身业务的调用封装，再挂载到工具库对象中，对外提供调用方法 `utils.alert()`, `utils.confirm()`, `utils.dialog()`

建议项目中独立一套常用工具库，如 `/Content/MobileDIY/js/utils.js`

封装的 modal 对象在本项目的 `/js/utils.js` 中

modal 的主题样式在本项目的 `/styles/ui-modal.css`

### 自定义主题

1. 定义主题样式
```css
.jconfirm.jconfirm-[THEME_NAME] .jconfirm-bg{
  ...
}
```

例如主题为 'moonlight'

```css
.jconfirm.jconfirm-moonlight .jconfirm-bg{
  ...
}
```

2. 使用主题

给方法传入参数 theme，值为主题名称

```js
utils.alert({
  theme: 'moonlight'
})
```

## 演示项目使用简介

1. **引入 jQuery.js, jquery-form.js, jquery-form.css, ui-modal.css, utils.js**
```html
<!-- jquery-confirm 样式 -->
<link rel="stylesheet" href="plugins/jquery-confirm/jquery-confirm-3.3.4.min.css">
<!-- 业务弹层样式 -->
<link rel="stylesheet" href="styles/ui-modal.css">

<!-- jQuery 依赖 -->
<script src="plugins/jquery/jquery-1.11.3.min.js"></script>
<!-- jquery-confirm 依赖 -->
<script src="plugins/jquery-confirm/jquery-confirm-3.3.4.min.js"></script>
<!-- 带有业务封装 modal 对象的工具库 -->
<script src="js/utils.js"></script>
```

2. **modal 参数**

```js
var options = {
  // 弹层标题，不传则不显示标题
  // @type {String}
  title: '',

  // 弹层标题样式类
  // @type {String}
  titleClass: '',

  // 弹层内容
  // @type {String|Function}
  // 文本字符串、HTML字符串
  // 传入返回 promise 对象的函数可用于异步获取内容，配合 contentLoaded 使用
  content: '',

  // 异步内容加载完毕钩子函数
  // @type {Function}
  // 内容加载完毕后的 callback 函数，配合 content 使用
  contentLoaded: function () {},

  // 主题名称
  // @type {String}
  theme: 'default',

  // 动画，大多数情况下不需要额外设定
  // @type {String}
  animation: 'none',

  // 是否使用 bootstrap 样式
  // @type {Boolean}
  // 固定填 false
  useBootstrap: false,

  // 确认按钮文字
  // @type {String}
  confirmButtonText: '',

  // 取消按钮文字
  // @type {String}
  cancelButtonText: '',

  // 弹层右上角关闭按钮图标
  // 大多数情况下不需要配置此字段
  closeIcon: '',
  onOpenBefore: function () {},
  onOpen: function () {},
  onClose: function () {},

  // 弹层按钮触发操作
  // @type {String}
  // 函数返回 action 操作名称
  // 'confirm' - 确认操作
  // 'cancel' - 取消操作
  onAction: function (action) {}
}
```

2. **使用 Alert 弹层**

```js
var $alertModal = utils.alert({
  title: '提示',
  content: '代码是写给人看的，附带能在机器上运行'
})
```

3. **使用 confirm 弹层**
```js
var $confirmModal = utils.confirm({
  title: '提示',
  content: '代码是写给人看的，附带能在机器上运行，同意吗？',
  onAction: function (action) {
    if (action === 'confirm') {
      // do something
    }
    if (action === 'cancel') {
      // do something else
    }
  }
})
```

4. **使用 dialog 弹层**
```js
var $dialogModal = utils.dialog({
  content: $('#template-container').html(),
  onOpen: function () {
    $('#template-button-ok').on('click', function () {
      // do something

      // 关闭弹层
      $dialogModal.close()
    })

    $('#template-button-close').on('click', function () {
      // do something else

      // 关闭弹层
      $dialogModal.close()
    })
  }
})
```

5. **使用 loading 弹层**

```js
var $loading = utils.loading({
  content: '加载中'
})

setTimeout(function () {
  // 关闭弹层
  $loading.close()
}, 3000)
```
