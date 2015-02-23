
$( function()
{
	$( '#nav li:has(ul)' ).doubleTapToGo();
});

var file = $.get( "menubar.txt" );

$( ".menubar" ).append( file );
