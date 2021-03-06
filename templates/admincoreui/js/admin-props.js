var hide_filter_props_list = true;
function filterPropsList(){

    if(hide_filter_props_list === true){
        $('#props-bind').hide();
    } else {
        $('#props-bind').show();
    }

    if ($('select[name=props_list]').length == 0) { return; }

    var full_list = $('select[name=props_list]');
    var current_list = $('#ctypes-props-toolbar select[name=prop_id]');

    current_list.html(full_list.html());

    if ($('#datagrid tbody tr').not('.empty_tr').length === 0){ return; }

    $('#datagrid tbody tr').each(function(){

       var row = $(this);
       var prop_id = $('a.edit', row).attr('href').split('/').pop();

       $('option[value='+prop_id+']', current_list).remove();

    });

    if ($('option', current_list).length == 0) { $('#props-bind').hide(); }

}