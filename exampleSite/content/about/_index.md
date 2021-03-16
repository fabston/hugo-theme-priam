---
title: About
author: Fabston
---

**Priam** is a a simple theme that supports a navigation menu, a home page, other single pages, lists of pages, blog posts, categories, tags, and RSS. That's it. Nothing fancy.

# config.yaml

For this example site, I defined permalinks for one section, `post`. This is optional, and it is up to your personal taste of URLs.

```yaml
permalinks:
  post: "/post/:slug/"
```

You can define the menu through `menu.main`, e.g.,

```yaml {linenos=table}
menu:
  main:
    - name: Home
      url: ""
      weight: 1
    - name: About
      url: "about/"
      weight: 2
    - name: Posts
      url: "post/"
      weight: 3
```

Alternatively, you can add `menu: main` to the YAML metadata of any of your pages, so that these pages will appear in the menu.

The page footer and description can be defined in `.Params` e.g.:

```yaml
params:
  description: "A minimal Hugo website"
  footer: "This theme is cool!"
```

The page author will be set in `.Author` e.g.:

```yaml
author:
  name: Priam Theme
```

{{< notice type="tip" title="Example config.yaml" >}}
An example `config.yaml` can be found on GitHub in the `exampleSite` tab [here](https://github.com/fabston/Hugo-Theme-Priam/blob/main/exampleSite/config.yaml).
{{< /notice >}}

# Custom layouts

There are two layout files under `layouts/partials/` that you may want to override: `head_custom.html` and `foot_custom.html`. This is how you inject arbitrary HTML code to the head and foot areas.