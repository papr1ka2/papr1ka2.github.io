---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
---

<!-- pages/projects.md -->
{% assign sorted_projects = site.projects | sort: "importance" %}

<ul class="post-list">
  {% for project in sorted_projects %}
    <li>
      <h3>
        <span class="post-title">{{ project.title }}</span>
      </h3>
      {% if project.links %}
        <p class="post-meta project-links">
          {% for link in project.links -%}
            <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
              {% if link.icon %}<i class="{{ link.icon }}"></i>{% endif %}
              {{ link.name }}
            </a>
            {%- unless forloop.last %} &nbsp; &middot; &nbsp; {% endunless -%}
          {%- endfor %}
        </p>
      {% endif %}
      {% if project.description %}
        <p>{{ project.description }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>
