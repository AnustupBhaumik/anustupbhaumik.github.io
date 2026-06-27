---
layout: default
title: Blog
---

<nav style="margin-bottom: 2rem; border-bottom: 1px solid #2d2d34; padding-bottom: 1rem;">
  <a href="/" style="margin-right: 1.5rem; font-weight: bold;">Home</a>
  <a href="/projects" style="margin-right: 1.5rem; font-weight: bold;">Projects</a>
  <a href="/blog" style="margin-right: 1.5rem; font-weight: bold;">Blog</a>
  <a href="/contact" style="font-weight: bold;">Contact</a>
</nav>


# ✍️ Blogs on some cool stuff

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
