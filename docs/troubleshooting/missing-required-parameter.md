# 缺少必要参数

**症状:** 你会得到一个错误提示

```text
Missing required parameters for [Route...]
```

**原因:** 有两种原因:  
1. 你没有为你的表设置主键  
2. 你为表设置的主键名字不是 `id`

**解决方案:** 由于有两个原因，也有两个解决方案: 
1. 为表设置一个名字为`id`的主键  
2. 使用这种方式，告诉你的模型，你的主键是`your_primary_key`: `protected $primaryKey = 'your_primary_key';`

请考虑以下 [Eloquents model 的惯例配置](https://learnku.com/docs/laravel/5.8/eloquent/3931#eloquent-model-conventions)

