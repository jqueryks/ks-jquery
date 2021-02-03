$.ajax({
    type: 'POST',
    url: kan_vars.ajax,
    data: $(this).serialize() + '&action=kanews_ajax_profile',
    dataType: "json"
});
