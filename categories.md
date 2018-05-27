---
layout: page
title: Categories
permalink: /categories/
---

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}

    <h3 id="{{category_name | downcase}}" class="category-head">{{ category_name }}</h3>

    {% for post in site.categories[category_name] %}
      <div class="post-summary-wrapper">
        <div class="post-summary">
          <div class="post-image">
            {% if post.image %}
            <figure>
              <a href="{{ post.url }}">
                  <img src="/images/{{ post.image }}" alt="{{ post.image_alt }}">
              </a>
            </figure>
            {% endif %}
          </div>
          <div class="post-info">
            <div class="post-meta">
              {% include post-category.html %}&nbsp;
              <i class="sprite sprite-stopwatch"></i>
              {% assign words = post.content | number_of_words %}
              <a href="{{ post.url }}">{% include read-time.html  word_count = words %} min read</a>
            </div>

            <header class="post-header">
              <h2 class="post-title-home">
                <a href="{{ post.url }}">{{ post.title }}</a>
              </h2>
            </header>

            <div class="post-meta">
              {% include post-meta.html %}
            </div>

            {% if post.intro %}
                <p>{{ post.intro }}</p>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}
</div>
