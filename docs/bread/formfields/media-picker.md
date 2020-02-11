# 媒体选择器

媒体选择器表单域允许您直接从媒体选择器上传/删除/选择文件。

您可以使用以下选项自定义行为：

```json
{
    "max": 10,
    "min": 0,
    "expanded": true,
    "show_folders": true,
    "show_toolbar": true,
    "allow_upload": true,
    "allow_move": true,
    "allow_delete": true,
    "allow_create_folder": true,
    "allow_rename": true,
    "allow_crop": true,
    "allowed": [],
    "hide_thumbnails": false,
    "quality": 90,
    "watermark": {
        "source": "...",
        "position": "top-left",
        "x": 0,
        "y": 0
    }
}
```

|参数|说明|类型|默认值|
|------|------|------|------|
| base_path            | 指定文件存放的路径    | String | /bread\-slug/ |
| rename                | 将上传的文件重命名为指定的字段或表达式             | String | Original name |
| delete_files         |   删除BREAD条目的时候，是否删除所有文件，谨慎使用 | bool   | false         |
| show_as_images      | Shows stored data as images when browsing       | bool   | false         |
| min                   | 可以选择文件的最小个数  | int    | 0             |
| max                   |  可以选择文件的最大个数 ，0代表不限 | int    | 0             |
| expanded              | 默认情况下展开媒体选择器   | bool   | true          |
| show_folders     | 是否显示子文件夹    | bool   | true          |
| show_toolbar     | 是否显示整个工具栏 | bool   | false         |
| allow_upload      | 是否允许用户上传文件     | bool   | true          |
| allow_move        | 是否允许用户移动文件或文件夹   | bool   | true          |
| allow_delete       | 是否允许用户删除文件    | bool   | true          |
| allow_create_folder | 是否允许用户创建文件夹   | bool   | true          |
| allow_rename         |  是否允许用户修改文件名，谨慎选择！ | bool   | true          |
| allow_crop           | 是否允许用户裁切图片  | bool   | true          |
| hide_thumbnails      | 隐藏已知的缩略图并将其显示为父图像的子级   | bool   | true          |
| quality               | 为上传的图片和缩略图设置图片质量   | int    | 90            |
| allowed               | 允许上传或选择的文件类型，为空表示所有类型，其他的文件类型，将不会展示出来 | Array | \[\]          |




### 允许的文件类型

如果希望用户只能上载特定的文件类型，则可以通过将具有mime类型的数组传递给`allowed`属性来执行此操作，例如：

```text
["image", "audio", "video"]
```

or

```text
["image/jpeg", "image/png", "image/bmp"]
```

### 表达式

 `base_path` 和 `rename` 可以使用如下占位符：

* `{pk}` 该条记录的主键 \(只能用于 `base_path`\)
* `{uid}` 当前登录用户的id
* `{date:format}` 使用 `format`格式记录的当前时间. 例如 `{date:d.m.Y}`
* `{random:10}`  N 位的随机字符串

拿 `base_path` 来举例，你可以参照如下设置:

```text
{
    "base_path": "/my-bread/{pk}/{date:Y}/{date:m}/"
}
```

### 图片水印

水印可以添加到上传的图像中。为此，您需要定义一个相对于laravel的storage目录的`source`属性。

您可以使用几个可选参数：
**position** 定义水印在图片中的显示位置. 可以是:
- top-left (默认)
- top
- top-right
- left
- center
- right
- bottom-left
- bottom
- bottom-right

如果你希望在`position`调整的基础上再做微调，可以使用`x`和`y`

**x** 相对于**position**定义的位置，在x轴做调整的像素，默认0

**y** 相对于**position**定义的位置，在y轴做调整的像素，默认0

**size** 水印图片相对于原图的尺寸百分比，默认是 15

### 缩略图
你可以为每一个上传的图片自动生成缩略图
一个缩略图只能使用下面三种其中的一种:
#### Fit

Fit将裁剪和调整大小结合起来，以找到生成与尺寸匹配的缩略图的最佳方法。

你必须使用 `width` ，但是可以附加 `height` 和 `position` 对图片进行调整，例如:
```json
{
    "thumbnails": [
        {
            "type": "fit",
            "name": "fit-500",
            "width": 500, // 必填
            "height": 500, // 可选
            "position": "center" // 可选. 参考 http://image.intervention.io/api/fit
        }
    ]
}
```
#### Crop
按给定的尺寸和位置裁剪图像。你必须使用`width`和`height`，并且可以使用`x`和`y`。

例如：
```
{
    "thumbnails": [
        {
            "type": "crop",
            "name": "crop-500-500",
            "width": 500, // 必填
            "height": 500, // 必填
            "x": 50, // 可选. 从左边开始的偏移量
            "y": 50, // 可选. 从顶部开始的偏移量
        }
    ]
}
```

#### Resize
根据给定的尺寸，调整图片尺寸， `width` 和 `height`至少指定一个
例如：
```
{
    "thumbnails": [
        // 宽度设置500像素，高度将根据纵横比进行计算
        {
            "type": "resize",
            "name": "resize-500",
            "width": 500,
            "upsize": true, // 可选参数，设置为false可方式填充尺寸
        },
        // 调整图片尺寸到 500x500像素
        {
            "type": "resize",
            "name": "resize-500-500",
            "width": 500,
            "height": 500
        },
        // 高度设置500像素，宽度将根据纵横比进行计算
        {
            "type": "resize",
            "name": "resize-500",
            "width": null,
            "height": 500
        }
    ]
}
```

水印也可以插入到每个缩略图中。只需在父级上定义[水印选项](#图片水印)，并为要插入水印的每个缩略图将`watermark` 设置为 `true` 。

