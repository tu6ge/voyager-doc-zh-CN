# 多语言支持

Voyager 可以让你的模型支持多种语言。在开始之前，你需要先配置一些东西。

## 安装

首先你需要在`config/voyager.php`文件中的 `locales`定义可选的语言列表，然后把`enable`设置为开启，开启多语言功能

```php
'multilingual' => [
        'enabled' => true,
        'default' => 'en',
        'locales' => [
            'en',
            'da',
        ],
    ],
```

然后你应该在你的model里引入`Translatable`trait，用来定义多语言属性

```php
use TCG\Voyager\Traits\Translatable;
class Post extends Model
{
    use Translatable;
    protected $translatable = ['title', 'body'];
}
```

现在您将在BREAD页面中看到一个语言选择器

## 使用

### 快速加载翻译信息

```php
// 加载所有翻译信息
$posts = Post::with('translations')->get();

// 加载所有翻译信息
$posts = Post::all();
$posts->load('translations');

// 加载所有翻译信息
$posts = Post::withTranslations()->get();

// 加载指定语言的翻译信息
$posts = Post::withTranslations(['en', 'da'])->get();

// Loads specific locale translations
$posts = Post::withTranslation('da')->get();

// Loads current locale translations
$posts = Post::withTranslation('da')->get();
```

### 获取默认语言的数据

```php
echo $post->title;
```

### 获取本地化后的数据

```php
echo $post->getTranslatedAttribute('title', 'locale', 'fallbackLocale');
```

如果不定义区域设置，则将使用当前应用程序区域设置。您可以将自己的区域设置作为字符串传入。如果未定义备用区域设置，则将使用当前应用程序备用区域设置。您可以将自己的区域设置作为字符串传递。如果要关闭备用区域设置，请传递false。如果找不到特定属性（区域设置或备用）的模型值，则会将该属性设置为空。

### 全部翻译模型数据

```php
$post = $post->translate('locale', 'fallbackLocale');
echo $post->title;
echo $post->body;

// You can also run the `translate` method on the Eloquent collection
// to translate all models in the collection.
$posts = $posts->translate('locale', 'fallbackLocale');
echo $posts[0]->title;
```

如果不定义区域设置，则将使用当前应用程序区域设置。您可以将自己的区域设置作为字符串传入。如果未定义备用区域设置，则将使用当前应用程序备用区域设置。您可以将自己的区域设置作为字符串传入。如果要关闭备用区域设置，请传递false。如果找不到特定属性（区域设置或备用）的模型值，则会将该属性设置为空。

### 判断一个model是否有翻译数据

```php
// with string
if (Voyager::translatable(Post::class)) {
    // it's translatable
}

// with object of Model or Collection
if (Voyager::translatable($post)) {
    // it's translatable
}
```

### 保存模型的翻译信息

```php
$post = $post->translate('da');
$post->title = 'foobar';
$post->save();
```

这将使用区域设置da更新或创建文章标题的翻译。请注意，如果修改后的属性不可翻译，则它将直接对模型本身进行更改。这意味着它将覆盖设置为默认语言的属性。



### 查询模型的翻译

要查询翻译的字段，你应该使用 `whereTranslation` 方法

```php
$page = Page::whereTranslation('slug', 'my-translated-slug');
// Is the same as
$page = Page::whereTranslation('slug', '=', 'my-translated-slug');
// Search only locale en, de and the default locale
$page = Page::whereTranslation('slug', '=', 'my-translated-slug', ['en', 'de']);
// Search only locale en and de
$page = Page::whereTranslation('slug', '=', 'my-translated-slug', ['en', 'de'], false);
```

`whereTranslation` 可以接受如下参数:

* `field` 要搜索的字段
* `operator` 运算符. 默认为 `=`. 也可以是其他值 \(等同于) [where](https://laravel.com/docs/queries#where-clauses)\)
* `value` 要查询的值
* `locales` 要查询的语言，可以用数组格式查询多种语言. 如果你希望查询所有语言，可不填
* `default` 同时在默认值/翻译设置中搜索。默认为true

