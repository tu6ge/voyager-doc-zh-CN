# 坐标表单域

## 详细配置

需要在BREAD界面设置

### showLatLngInput / showAutocompleteInput

这两项可以任意设置为`false`,就不会包含在表单域中，他们默认都是`true`

```json
{
  "showAutocompleteInput": false,
  "showLatLngInput": false
}
```

### onChange

```json
{
  "onChange": "myFunction"
}
```

当你在更改该坐标的时候，可能需要事件回调来处理一些东西，你可以使用`onChange`定义一个事件回调

onChange callback is debounced at 300ms.

译者注：这句话没明白

第一个字段是 `eventType` ，他的值是"mapDragged", "latLngChanged"或 "placeChanged"这三个其中一个. 第二个字段 `data` 是一个包含 `lat`, `lng`和 `place` 属性的对象

```javascript
function myFunction(eventType, data) {
  console.log('eventType', eventType);
  console.log('data.lat', data.lat);
  console.log('data.lng', data.lng);
  console.log('data.place', data.place);
}
```
