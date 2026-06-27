---
layout: default
title: Blog
---

# ✍️ Personal Blogs on TCS

Here you can find my latest write-ups regarding algorithms and theoretical computer science.

<ul style="list-style-type: none; padding-left: 0;">
  {% for post in site.posts %}
    <li class="blog-card">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <span style="color: #a0aec0; font-size: 0.85rem;">Published: {{ post.date | date: "%B %d, %Y" }}</span>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </li>
  {% endfor %}
</ul>
