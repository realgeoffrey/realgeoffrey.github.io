<% for(var i = 0, len = list.length; i < len; i++){ %>
<li>
    <a href="javascript: void(0);" class="actlist_anchor_img j-act-jump"
       data-isplaying="<%= list[i].live %>"
       data-userid="<%= list[i].userid %>"
       data-uuid="<%= list[i].uuid %>"
       data-roomid="<%= list[i].room %>"
    >
        <% if(list[i].live == 1){ %>
        <i class="actico_live"><i></i></i>
        <% } %>
    </a>
    <span class="actlist_anchor_name"><%= list[i].name %></span>
    <% if(list[i].is_follow == 1){ %>
    <a href="javascript: void(0);" class="actlist_anchor_btn cur" role="button">已关注</a>
    <% } else if(list[i].is_follow == 0) { %>
    <a href="javascript: void(0);" class="actlist_anchor_btn j-act-follow" role="button" data-playerid="<%= list[i].userid %>">关注</a>
    <% } %>
</li>
<% } %>
