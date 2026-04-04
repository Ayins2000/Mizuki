---
title: "如何使用Cloudflare免费的pages功能和Github的仓库搭建一个基于Astro的静态博客"
published: 2025-01-20
pinned: false
description: "这是一篇介绍如何搭建自己博客的文章"
category: Examples
licenseName: "Unlicensed"
author: "Ayin"
draft: false
date: 2025-01-20
pubDate: 2025-01-20
permalink: "encrypted-example"
---

# 如何使用Cloudflare免费的pages功能和Github的仓库搭建一个基于Astro的静态博客

## 你需要拥有什么？
1. 一个邮箱
2. 一个梯子（VPN），不需要太好，能用就行
3. 一颗光滑的大脑

## 第一步：搞一个Cloudflare免费的账号

注册非常简单，先进入Cloudflare的官网：[点我跳转](sslocal://flow/file_open?url=https%3A%2F%2Fdash.cloudflare.com&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=)。

然后根据上面提示输入邮箱密码注册，如果不懂可以使用网页翻译和自行搜索。

注意：
Cloudflare的官网可能加载不出来，这个时候就需要你提前准备的梯子了。

## 第二步：注册Github账号

从这一步起，你的梯子就需要长时间挂着了。然后点击后面蓝字进行注册：[点击进入](sslocal://flow/file_open?url=https%3A%2F%2Fgithub.com&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=)

如果注册的时候提示“无法注册账户，请稍后再试”这种类似的黄底警告，请直接刷新网站，之后就应该没有什么问题了。

## 第三步：添加Github仓库

您可以自行搜索相关的博客项目，我就使用这个和这个网站同款的模板进行演示：[点击跳转](sslocal://flow/file_open?url=https%3A%2F%2Fgithub.com%2Fmatsuzaka-yuki%2FMizuki&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=)

然后点击网页上一个类似树图标的按钮，旁边有字为“Fork”，然后点击这个标志，就会跳转到一个标题为“Create a new fork”的网页，请直接点击下方的绿色按钮“Create Fork”进行创建。

等到再次跳转到另一个和原网页差不多的网页的时候，就代表你的Git仓库创建成功了。

## 第四步：回到Cloudflare网站进行部署

转到Cloudflare首页之后，直接点击右上角的一个蓝色按钮“+ Add”，选择“Pages”，选择第一个选项：“Import an existing Git repository”，然后点击“Get started”创建项目。

然后跳转到一个页面，在上面一栏选择“Github”，之后下面点击“+ Add account”，之后就会跳转到Github页面，点击下方绿色按钮进行确认，之后就会自动跳转到Cloudflare页面，之后在你的账户下方一栏“Select a repository”选择你刚才创建的项目，项目默认名称为Github上的文件名。

之后来到了一个页面，请按照下方表格填写，如果没有就不填，如果不确定就返回Github页面查看指令或者询问AI：

| Project | Build command（重点） | NODE_VERSION（选填） |
| --- | --- | --- |
| 填一个你喜欢的名字 | pnpm run build | 23 |

然后就是点击网页最底部蓝色按钮进行部署了，跳转到了下一个网页请耐心等待网页部署完成（出现4个绿色对勾），然后点击最底部蓝色按钮完成部署。

### 这样你就有了一个博客了，点击下方网站学习更多：[点击打开](sslocal://flow/file_open?url=https%3A%2F%2Fdocs.mizuki.mysqil.com%2F&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=)
