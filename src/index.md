---
layout: nav_layout.njk
title: Onderwerpen
course_title: Inhoud
date: 2025-08-25
tags: homepage
---

::: section
### Onderwerpen

{% for c in courses.courses %}
* [{{c.name}}]({{c.url}})
{% endfor %}

:::