---
layout: infopage
title: STO News
description: Discussing the latest news from Star Trek Online!
style: red-alert
---
<h1>Star Trek Online &bull; LATEST NEWS</h1>
{% if page.style == 'red-alert' %}
<p class="postmeta">RED ALERT: <span class="blink">ACTIVE</span></p>
{% else %}
<p class="postmeta">RED ALERT: <span>NONE</span></p>
{% endif %}

{% assign articles = site.sto_news | reverse %}
{% for item in articles %}
<div class="lcars-text-bar"><span>{{ item.timestamp }}</span></div>
<h2>{{ item.title }}</h2>
<img class="pics border" src="{{ item.image }}">
<p>{{ item.content }}</p>
{% endfor %}