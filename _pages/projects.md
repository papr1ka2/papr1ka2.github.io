---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
---

<!-- pages/projects.md -->
{% assign sorted_projects = site.projects | sort: "importance" %}

<ul class="project-list">
  {% for project in sorted_projects %}
    <li class="project-item">
      <div class="project-line">
        <span class="project-title">{{ project.title }}</span>
        {% if project.tags %}
          {% for tag in project.tags %}
            <span class="project-tag tag-{{ tag }}">{{ tag }}</span>
          {% endfor %}
        {% endif %}
      </div>
      {% if project.description %}
        <p class="project-description">{{ project.description }}</p>
      {% endif %}
      {% if project.links %}
        <ul class="project-links">
          {% for link in project.links %}
            <li>
              <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
                {% if link.icon %}<i class="{{ link.icon }}"></i>{% endif %}
                <span>{{ link.name }}</span>
              </a>
            </li>
          {% endfor %}
        </ul>
      {% endif %}
    </li>
  {% endfor %}
</ul>
