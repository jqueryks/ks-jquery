jQuery(function($) {
	jQuery.ajax({
			type: 'POST',
			url: ajaxurl,
			data : {
				action : 'mfs_can_meodal_2kmsa1',
				daed : 0,
				content : 'deneme'
			},
			dataType: "json"
	});
});
