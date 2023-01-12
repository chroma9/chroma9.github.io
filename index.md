---
layout: infopage
---
<div class="lcars-text-bar"><span>Welcome</span></div>
Welcome to my personal website used to track and document various
elements in my life. I've been coding for a long time and have
enjoyed the STAR TREK franchise for longer than that.

<div class="lcars-text-bar"><span>Latest Posts</span></div>
<ul class="lcars-list uppercase">
{% for post in site.posts limit:5 %}
<li id="blogpost-{{ post.date | date: '%s' }}">
    <a href="{{ post.url }}">{{ post.title }}</a>
    <br>
    <span id="stardate-{{ post.date | date: '%s' }}"></span>
    <span> &bull; </span>
    <span id="timestamp-{{ post.date | date: '%s' }}">{{ post.date | date: '%B %-d, %Y' }}</span>
</li>
{% endfor %}
</ul>
<script type="text/javascript">
const timestamps = document.querySelectorAll(`[id^="timestamp-"]`);
for(let i = 0; i < timestamps.length; i++) {
    let suffix = timestamps[i].id.split('-')[1];
    renderStardate(`#timestamp-${suffix}`,`#stardate-${suffix}`);
}
</script>