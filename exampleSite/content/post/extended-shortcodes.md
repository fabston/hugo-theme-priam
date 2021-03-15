---
title: Extended Shortcodes
description: Priam theme provides multiple shortcodes on top of built-in ones in Hugo.
author: Fabston
date: '2021-01-13'
lastmod: 0
categories:
  - Shortcodes
tags:
  - Shortcodes
---

# Notice

```markdown
{{</* notice type="tip" title="Yout title" */>}}
Your text goes here
{{</* /notice */>}}
```

{{< notice type="tip" title="Tip notice" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum nibh non felis pretium bibendum. Praesent non mauris varius, semper lorem et, tempor erat. Fusce non mi enim. Quisque a lectus et lectus accumsan vestibulum et eget turpis. Aliquam et vehicula tellus, ut efficitur sem. Nullam quis rhoncus dui. Proin ut feugiat est. In ut urna ex. 
{{< /notice >}}

{{< notice type="info" title="Info notie" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum nibh non felis pretium bibendum. Praesent non mauris varius, semper lorem et, tempor erat. Fusce non mi enim. Quisque a lectus et lectus accumsan vestibulum et eget turpis. Aliquam et vehicula tellus, ut efficitur sem. Nullam quis rhoncus dui. Proin ut feugiat est. In ut urna ex. 
{{< /notice >}}

{{< notice type="success" title="Success notice" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum nibh non felis pretium bibendum. Praesent non mauris varius, semper lorem et, tempor erat. Fusce non mi enim. Quisque a lectus et lectus accumsan vestibulum et eget turpis. Aliquam et vehicula tellus, ut efficitur sem. Nullam quis rhoncus dui. Proin ut feugiat est. In ut urna ex. 
{{< /notice >}}

{{< notice type="book" title="Book notice" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum nibh non felis pretium bibendum. Praesent non mauris varius, semper lorem et, tempor erat. Fusce non mi enim. Quisque a lectus et lectus accumsan vestibulum et eget turpis. Aliquam et vehicula tellus, ut efficitur sem. Nullam quis rhoncus dui. Proin ut feugiat est. In ut urna ex. 
{{< /notice >}}

{{< notice type="warning" title="Warning notice" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum nibh non felis pretium bibendum. Praesent non mauris varius, semper lorem et, tempor erat. Fusce non mi enim. Quisque a lectus et lectus accumsan vestibulum et eget turpis. Aliquam et vehicula tellus, ut efficitur sem. Nullam quis rhoncus dui. Proin ut feugiat est. In ut urna ex. 
{{< /notice >}}

{{< notice type="attention" title="Attention notice" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum nibh non felis pretium bibendum. Praesent non mauris varius, semper lorem et, tempor erat. Fusce non mi enim. Quisque a lectus et lectus accumsan vestibulum et eget turpis. Aliquam et vehicula tellus, ut efficitur sem. Nullam quis rhoncus dui. Proin ut feugiat est. In ut urna ex. 
{{< /notice >}}

# Fork Awesome

[Fork Awesome](https://forkaweso.me/Fork-Awesome/) is a privacy respecting alternative to Font Awesome. This theme comes with it and you can simply add icons with the following shortcode:

```markdown
{{</* forkawesome fa fa-star */>}}
```