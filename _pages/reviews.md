---
layout: page
permalink: /reviews/
title: reviews
description: Reviews of products and services
nav: true
nav_order: 40
display_categories: [review]
horizontal: false
---


<!-- Reviews are pages with a category of review -->
<!-- pages/reviews.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized tutorials -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_reviews = site.reviews | where: "category", category %}
  {% assign sorted_reviews = categorized_reviews | sort: "importance" %}
  <!-- Generate cards for each tutorial -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_reviews %}
      {% include reviews_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_reviews %}
      {% include reviews.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_reviews %}
      {% include reviews_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_reviews %}
      {% include reviews.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>