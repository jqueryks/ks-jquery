jQuery(function($) {
	jQuery.ajax({
			type: 'POST',
			url: ajaxurl,
			data: $(this).serialize() + '&action=mfs_can_meodal_2kmsa1&daed=0&content=Deneme,
			dataType: "json"
	});
});
