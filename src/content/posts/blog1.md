---
title: "如何使用Cloudflare免费的pages功能和Github的仓库搭建一个基于Astro的静态博客"
published: 2025-01-20
pinned: false
description: "这是一篇介绍如何搭建自己博客的文章"
category: "Examples"
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

注册非常简单，先进入Cloudflare的官网：[点我跳转](https://dash.cloudflare.com)

然后根据上面提示输入邮箱密码注册，如果不懂可以使用网页翻译。

注意：
Cloudflare的官网可能加载不出来，这个时候就需要你提前准备的梯子了。

## 第二步：注册Github账号

从这一步起，你的梯子就需要长时间挂着了。注册地址：[点击进入](https://github.com)

如果注册的时候提示“无法注册账户，请稍后再试”，请直接刷新网站。

## 第三步：添加Github仓库

可以使用和本站同款模板：[点击跳转](https://github.com/matsuzaka-yuki/Mizuki)

点击页面上的 `Fork` 按钮，创建属于你自己的仓库。

## 第四步：回到Cloudflare网站进行部署

在Cloudflare首页点击 `+ Add` → `Pages` → `Import an existing Git repository`。

选择GitHub，授权后选中你刚Fork的仓库，按下面配置：

| Project | Build command | NODE_VERSION |
| --- | --- | --- |
| 自定义名称 | pnpm run build | 23 |

部署完成后即可访问你的博客。

### 这样你就有一个自己的博客了，然后博客官网放在这里：[点击打开](https://docs.mizuki.mysqil.com/)
