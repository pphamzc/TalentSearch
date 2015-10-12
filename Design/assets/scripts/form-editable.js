/* global jQuery, TableAdvanced */
var FormEditable = (function( $ ){

	function _initEditables() {
		var filters = $('#sample_2_wrapper .column-filter');

		$.fn.editable.defaults.inputclass = 'm-wrap';
		$.fn.editableform.buttons = '<button onclick="event.stopPropagation();" type="submit" class="btn blue editable-submit"><i class="icon-ok"></i></button><button onclick="event.stopPropagation();" type="button" class="btn editable-cancel"><i class="icon-remove"></i></button>';
		$.fn.editableform.template = '<form onkeypress="event.stopPropagation();" class="form-inline editableform">\n\
<div class="control-group">\n\
<div><div class="editable-input"></div><div class="editable-buttons"></div></div>\n\
<div class="editable-error-block"></div>\n\
</div>\n\
</form>';

		$('#sample_2_wrapper .column-filter').each(function(){
			var $this = $(this),
				options = $this.data();

			options = $.extend( {}, {
				type: 'text',
				pk: 0,
				display: false
			}, options );

			options.success = function( resp, val ) {
				TableAdvanced.dataTable().fnFilter( val, filters.index( $this ) );
			};

			$this.editable( options ).on('hidden', function( e, reason ){
				if ( 'cancel' === reason ) {
					$this.editable('setValue', '');
					TableAdvanced.dataTable().fnFilter( '', filters.index( $this ) );
				}
			});
		}).click(function(e){
			e.stopPropagation();
		});
	}

	return {
		init: function() {

			if ( ! $.fn.editable ) {
				return;
			}

			_initEditables();
		}
	};

})( jQuery );