# 关联表

使用BREAD你可以非常方便的在多个表之间创建关联关系， 在页面底部你可以看到一个按钮“创建关联”

![](../.gitbook/assets/bread_relationship.png)

::: warning 通知
如果你即将关联的表格，没有创建BREAD，那么你需要先去创建对应的BREAD，然后再回来添加关联，否则你将收到如下通知
:::

![](../.gitbook/assets/bread_relationship_no_bread.png)

因此，只有你先创建好BREAD，才允许你创建一个新的关联，在按下“创建关联”按钮后，你会看到一个下面这样的新窗口：

![](../.gitbook/assets/bread_relationship_form.png)

你首先应该选择哪种关联关系，然后选择要关联的表已经这个表的模型的命名空间，然后选择要关系的字段

你也可以在下拉列表中要关联的字段


现在你可以使用Voyager非常方便地创建`belongsTo`, `belongsToMany`, `hasOne`和 `hasMany`关联